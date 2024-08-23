import { mixed, object, string } from "yup"

let userSchema = object({
    Nombre: string().required("El campo nombre es requerido"),
    Telefono: mixed().required("El campo telefono es requerido"),
    Email: string().email("El campo de email no tiene el formato correcto").required("El campo email es requerido")
})

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm)
        return { status: "success" }
    }   catch (error) {
    return { status: "error", message: error.message }
}
}

export default validateForm