import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toastification";
import { useUserStore } from "./userStore";
import VueCookies from "vue-cookies";

const token = VueCookies.get("jwt");

export const useInvoiceItemsStore = defineStore("invoiceItems", {
  state: () => ({
    invoiceItems: [],
    loading: false,
    getDataLoading: true,
    isModalOpen: false,
    deleteModalOpen: false,
    deleteId: null,
    invoiceId: null,
    customerId_error: false,
    currentPage: 1,
    lastPage: 1,
    form: {
      invoice_id: null,
      item_name: "",
      price: "",
      quantity: "",
      subtotal: "",
      note: "",
    },
  }),

  actions: {
    setInvoiceId(id) {
      this.invoiceId = id;
      this.form.invoice_id = id;
    },

    async fetchInvoiceItems(page = 1) {
      this.getDataLoading = true;
      try {
        const userStore = useUserStore();
        await userStore.fetchUser(); // Fetch user first

        const response = await axios.get(
          `/invoice-items/invoice/${this.invoiceId}?page=${page}`
        );

        this.invoiceItems = response.data.data;
        this.currentPage = response.data.current_page;
        this.lastPage = response.data.last_page;
      } catch (error) {
        this.customerId_error = true;
      } finally {
        this.getDataLoading = false;
      }
    },

    openModal(item = null) {
      this.form = item
        ? { ...item }
        : {
            invoice_id: this.invoiceId,
            item_name: "",
            price: "",
            quantity: "",
            subtotal: "",
            note: "",
          };
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    async saveInvoiceItem() {
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
            await axios.put(
              `/invoice-items/update/${this.form.id}`,
              this.form,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            toast.success("Invoice item updated successfully!");
          } else {
            await axios.post("/invoice-items/store", this.form, {
              headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Invoice item added successfully!");
          }
          await this.fetchInvoiceItems();
          this.closeModal();
        }
      } catch (error) {
        toast.error("Error saving invoice item");
      } finally {
        this.loading = false;
      }
    },

    confirmDelete(id) {
      this.deleteId = id;
      this.deleteModalOpen = true;
    },
    closeDeleteModal() {
      this.deleteModalOpen = false;
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
          await axios.delete(`/invoice-items/delete/${this.deleteId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.deleteModalOpen = false;
          await this.fetchInvoiceItems();
          toast.success("Invoice item deleted successfully!");
        }
      } catch (error) {
        toast.error("Error deleting invoice item");
      } finally {
        this.loading = false;
      }
    },
  },
});
