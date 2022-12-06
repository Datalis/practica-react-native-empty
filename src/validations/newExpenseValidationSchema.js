import * as Yup from 'yup'

export const newExpenseValidationSchema = Yup.object({
    numDoc: Yup.string()
        .max(15, "Maximo")
        .required("Es requerido"),
    eType: Yup.string()
        .max(5, "Maximo")
        .required("Es requerido"),
    providerRuc: Yup.string()
        .max(13, "Maximo")
        .required("Es requerido"),
    totalVal: Yup.string()
        .max(5, "Maximo")
        .required("Es requerido")
})

