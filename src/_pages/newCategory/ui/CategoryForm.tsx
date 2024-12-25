'use client'

import { FormEvent, ChangeEvent, useCallback, useState } from "react"
import toast from 'react-hot-toast';

import { createNewCategory } from "@/feature/newCategory/api/createCategory"

import { DEFAULT_FORM_STATE, FIELD_NAMES } from "@/shared/model/category/constans"
import { CONTENT } from "@/shared/model/category/content"
import { FORM_ERROR, FORM_STATE, ICategory } from "@/shared/model/category/types"
import { Button } from "@/shared/ui/Button"
import { Form, FormRow } from "@/shared/ui/Form"
import { Input } from "@/shared/ui/Input"
import { getErrorMessage } from '@/shared/utils/helpers';

import { useAppState, useAppDispatch } from '@/shared/hooks';
import { addCategory } from '@/shared/store';
import { getUser } from '@/shared/store';
import { NewCategory } from "@/feature/newCategory/model/types";

export const CategoryForm = () => {
    const [formState, setFormState] = useState<FORM_STATE>(DEFAULT_FORM_STATE)
    const [errors, setErrors] = useState<FORM_ERROR>({})
    const [isLoading, setLoading] = useState(false)
    
    const user = useAppState(getUser);
    const dispatch = useAppDispatch()

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }))

        if(errors && errors[name]) {
            setErrors(prev => ({...prev, [name]: null}))
        }
    }, [errors])

    const handleSubmit = useCallback(async (e: FormEvent) => {
        try {
            setLoading(true)
            const category = await createNewCategory({
                userId: user?.id,
                ...formState
            } as NewCategory)

            setFormState(DEFAULT_FORM_STATE)
            dispatch(addCategory(category))

            toast.success(CONTENT.NOTIFICATION.CREATE_CATEGORY)
        } catch(e) {
            toast.error(getErrorMessage(e))
        } finally {
            setLoading(false)
        }
    }, [formState])

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