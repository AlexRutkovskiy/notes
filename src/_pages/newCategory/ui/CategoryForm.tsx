'use client'

import { ChangeEvent, useCallback, useState } from "react"

import { DEFAULT_FORM_STATE, FIELD_NAMES } from "@/shared/model/category/constans"
import { CONTENT } from "@/shared/model/category/content"
import { FORM_ERROR, FORM_STATE } from "@/shared/model/category/types"
import { Button } from "@/shared/ui/Button"
import { Form, FormRow } from "@/shared/ui/Form"
import { Input } from "@/shared/ui/Input"

export const CategoryForm = () => {
    const [formState, setFormState] = useState<FORM_STATE>(DEFAULT_FORM_STATE)
    const [errors, setErrors] = useState<FORM_ERROR>({})
    const [isLoading, setLoading] = useState(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }))

    if(errors && errors[name]) {
      setErrors(prev => ({...prev, [name]: null}))
    }
  }, [errors])

    const handleSubmit = useCallback(() => {}, [])

    return (
        <Form onSubmit={handleSubmit}>
            <FormRow>
                <Input 
                    name={FIELD_NAMES.TITLE}
                    label={CONTENT.LABELS.TITLE}
                    value={formState[FIELD_NAMES.TITLE]}
                    errors={errors[FIELD_NAMES.TITLE]}
                    onChange={handleChange}
                    disabled={isLoading}
                />
            </FormRow>
            <FormRow>
                <Input 
                    name={FIELD_NAMES.DESCRIPTION}
                    label={CONTENT.LABELS.DESCRIPTION}
                    value={formState[FIELD_NAMES.DESCRIPTION]}
                    errors={errors[FIELD_NAMES.DESCRIPTION]}
                    onChange={handleChange}
                    disabled={isLoading}
                />
            </FormRow>
            <FormRow>
                <Button type="submit" disabled={isLoading}>
                    {CONTENT.LABELS.SUBMIT}
                </Button>
            </FormRow>    
        </Form>
    )
}