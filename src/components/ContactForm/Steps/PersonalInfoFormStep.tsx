import { Input } from '&components/Input/Input'
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormHandleSubmit
} from 'react-hook-form'
import { ActionButtons } from '../ActionButtons'
import * as S from '../style'

interface props {
  isLoading: boolean
  handlePreviousStep: () => void
  activeStep: number
  control: Control<any, any>
  errors: DeepMap<FieldValues, FieldError> & { message?: string }
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
  onSubmit: () => void
}
export function PersonalInfoFormStep({
  isLoading,
  activeStep,
  handlePreviousStep,
  control,
  errors,
  handleSubmit,
  onSubmit
}: props) {
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        label="Nome *"
        error={errors['name']}
        disabled={isLoading}
      />
      <Input
        control={control}
        name="email"
        label="Email *"
        error={errors['email']}
        disabled={isLoading}
      />
      <Input
        control={control}
        name="phone"
        label="Telefone *"
        error={errors['phone']}
        disabled={isLoading}
      />
      <Input
        control={control}
        name="username"
        label="Nome de usuário"
        error={errors['username']}
        disabled={isLoading}
      />
      <Input
        control={control}
        name="website"
        label="Website"
        error={errors['website']}
        disabled={isLoading}
      />
      <ActionButtons
        activeStep={activeStep}
        handlePreviousStep={handlePreviousStep}
        isLoading={isLoading}
      />
    </S.Form>
  )
}
