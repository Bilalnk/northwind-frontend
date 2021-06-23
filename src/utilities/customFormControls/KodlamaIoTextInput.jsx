import React from 'react'
import { useField } from 'formik'
import { FormField, Field, Label } from 'semantic-ui-react'

function KodlamaIoTextInput({ ...props }) {

        // console.log(props)

        //reflect api
        const [field, meta] = useField(props)

        return (
                <FormField error={meta.touched && !!meta.error}>
                        <input {...field} {...props} />

                        {meta.touched && !!meta.error ? (

                                <Label pointing basic color="red" content={meta.error}></Label>
                        ): null }
                        
                </FormField>
        )
}

export default KodlamaIoTextInput
