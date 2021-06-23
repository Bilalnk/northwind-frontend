import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { FormField, Button, Label} from "semantic-ui-react"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'


function ProductAdd() {


        const initialValues = {
                productName: "",
                unitPrice: 10,
        }

        const schema = Yup.object({
                productName: Yup.string().required("Ürün adı zorunlu"),
                unitPrice: Yup.number().required("Bu alan zorunludur")
        })

        return (
                <div>
                        <Formik
                                initialValues={initialValues}
                                validationSchema={schema}
                                onSubmit={(values)=> {console.log(values)}}
                        >
                                <Form className="ui form">

                                        <KodlamaIoTextInput name="productName" placeholder='Ürün Adı' />
                                        <KodlamaIoTextInput name="unitPrice" placeholder='Ürün fiyatı'/>
                                        <Button 
                                        color="green"
                                        type="submit">
                                                EKLE
                                        </Button>
                                </Form>

                        </Formik>
                </div>
        )
}

export default ProductAdd
