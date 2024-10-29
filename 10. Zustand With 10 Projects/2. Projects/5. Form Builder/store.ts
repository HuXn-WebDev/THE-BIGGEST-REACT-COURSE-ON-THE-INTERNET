import { create } from "zustand";

// Define the type for form fields
interface FormField {
  label: string;
  type: "text" | "number" | "password" | "textarea" | "date" | "file";
  value: string;
}

// Define the shape of the store state
interface FormStoreState {
  formFields: FormField[];
  addField: (field: FormField) => void;
  removeField: (index: number) => void;
  updateField: (index: number, updatedField: FormField) => void;
  resetForm: () => void;
}

// Create the Zustand store with TypeScript
const useFormStore = create<FormStoreState>((set) => ({
  formFields: [],

  addField: (field) =>
    set((state) => ({
      formFields: [...state.formFields, field],
    })),

  removeField: (index) =>
    set((state) => ({
      formFields: state.formFields.filter((_, i) => i !== index),
    })),

  updateField: (index, updatedField) =>
    set((state) => ({
      formFields: state.formFields.map((field, i) =>
        i === index ? updatedField : field
      ),
    })),

  resetForm: () => set({ formFields: [] }),
}));

export default useFormStore;
