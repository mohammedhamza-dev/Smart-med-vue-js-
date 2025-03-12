import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useUserStore } from "./userStore";
import VueCookies from "vue-cookies";

const token = VueCookies.get("jwt");

export const useInvoiceStore = defineStore("invoice", {
  state: () => ({
    invoices: [],
    loading: false,
    getDataLoading: true,
    isModalOpen: false,
    deleteModalOpen: false,
    deleteId: null,
    customerId: null,
    customerId_error: false,
    currentPage: 1,
    lastPage: 1,
    form: {
      customer_id: null,
      invoice_date: "",
      done: false,
      created_by: null,
    },
  }),

  actions: {
    setCustomerId(id) {
      this.customerId = id;
      this.form.customer_id = id;
    },

    async fetchInvoices(page = 1) {
      this.getDataLoading = true;
      try {
        const userStore = useUserStore();
        await userStore.fetchUser(); // Fetch user first

        if (userStore.user) {
          this.form.created_by = userStore.user.id;
        }

        const response = await axios.get(
          `/invoices/customer/${this.customerId}?page=${page}`
        );

        this.invoices = response.data.data.map((invoice) => ({
          ...invoice,
          done: Boolean(invoice.done),
        }));

        this.currentPage = response.data.current_page;
        this.lastPage = response.data.last_page;
      } catch (error) {
        this.customerId_error = true;
      } finally {
        this.getDataLoading = false;
      }
    },

    openModal(invoice = null) {
      const userStore = useUserStore();
      this.form = invoice
        ? { ...invoice, done: invoice.done ?? false }
        : {
            customer_id: this.customerId,
            invoice_date: "",
            done: false,
            created_by: userStore.user?.id,
          };
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },
    closeDeleteModal() {
      this.deleteModalOpen = false;
    },

    async saveInvoice() {
      const toast = useToast();
      this.loading = true;
      try {
        const userStore = useUserStore();

        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
        } else {
          if (this.form.id) {
            await axios.put(`/invoice/update/${this.form.id}`, this.form, {
              headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Invoice updated successfully!");
          } else {
            await axios.post("/invoice/store", this.form, {
              headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Invoice added successfully!");
          }
          await this.fetchInvoices();
          this.closeModal();
        }
      } catch (error) {
        console.error("Error saving invoice:", error);
      } finally {
        this.loading = false;
      }
    },

    confirmDelete(id) {
      this.deleteId = id;
      this.deleteModalOpen = true;
    },

    async deleteInvoice() {
      const toast = useToast();
      this.loading = true;
      try {
        const userStore = useUserStore();
        if (!userStore.user) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please log in to continue",
            footer: '<a href="/login">Need access? Log in here</a>',
          });
        } else {
          await axios.delete(
            `/invoice/delete/${this.deleteId}`,

            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          this.deleteModalOpen = false;
          await this.fetchInvoices();
          toast.success("Invoice deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting invoice:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
