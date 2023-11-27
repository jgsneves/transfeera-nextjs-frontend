import { Formik, FormikHelpers } from "formik";
import { PixKeyTypes } from "../../../constants/pix-key-types";
import { Button } from "../../Button";
import {
  isValidCNPJ,
  isValidCPF,
  isValidEmail,
} from "@brazilian-utils/brazilian-utils";
import { ErrorMessage } from "../../ErrorMessage";
import { TrashIcon } from "@heroicons/react/24/solid";

export interface ReceiverFormValues {
  name: string;
  taxId: string;
  email: string;
  pixKeyType: PixKeyTypes;
  pixKey: string;
}

interface Props {
  handleGoBackOnClick: (event: React.MouseEvent) => void;
  handleOnSubmit: (
    values: ReceiverFormValues,
    formikHelpers: FormikHelpers<ReceiverFormValues>
  ) => void;
  initialValues: ReceiverFormValues;
  renderDeleteButton?: boolean;
  handleDeleteOnClick?: () => void;
}

export const ReceiverForm = ({
  handleGoBackOnClick,
  handleOnSubmit,
  initialValues,
  renderDeleteButton,
  handleDeleteOnClick,
}: Props) => {
  const validate = (values: ReceiverFormValues) => {
    let errors = {};

    if (values.name === "") {
      errors = { ...errors, name: "O nome deve ser preenchido" };
    }

    if (values.email === "") {
      errors = { ...errors, email: "O e-mail deve ser preenchido" };
    }

    if (!isValidEmail(values.email)) {
      errors = { ...errors, email: "Utilize um e-mail válido" };
    }

    if (values.pixKey === "") {
      errors = { ...errors, pixKey: "A chave PIX deve ser preenchida" };
    }

    if (values.taxId === "") {
      errors = { ...errors, taxId: "Um CPF/CNPJ deve ser fornecido" };
    }

    const isTaxIdValid = isValidCNPJ(values.taxId) || isValidCPF(values.taxId);

    if (!isTaxIdValid) {
      errors = { ...errors, taxId: "Forneça um CPF/CNPJ válido" };
    }

    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validate={validate}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
      }) => (
        <form onSubmit={handleSubmit}>
          <h1 className="py-[30px]">Quais os dados do favorecido?</h1>
          <div className="flex flex-wrap gap-10">
            <label htmlFor="name" className="flex flex-col w-[370px]">
              Qual nome completo ou razão social do favorecido?
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="name"
                type="text"
                className={`border-2 border-${
                  errors.name && touched.name ? "red-500" : "gray"
                } rounded h-8`}
                value={values.name}
              />
              {errors.name && touched.name && (
                <ErrorMessage>{errors.name}</ErrorMessage>
              )}
            </label>

            <label htmlFor="textId" className="flex flex-col">
              Qual CPF ou CNPJ?
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="taxId"
                className={`border-2 border-${
                  errors.taxId && touched.taxId ? "red-500" : "gray"
                } rounded h-8`}
                value={values.taxId}
              />
              {errors.taxId && touched.taxId && (
                <ErrorMessage>{errors.taxId}</ErrorMessage>
              )}
            </label>

            <label htmlFor="email" className="flex flex-col w-[370px]">
              Qual o e-mail para o envio do comprovante?
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                type="email"
                className={`border-2 border-${
                  errors.email && touched.email ? "red-500" : "gray"
                } rounded h-8`}
                value={values.email}
              />
              {errors.email && touched.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </label>
          </div>

          <h1 className="py-[30px]">Qual a chave pix?</h1>
          <div className="flex flex-col gap-10">
            <label htmlFor="pixKeyType" className="flex flex-col w-[370px]">
              Tipo de chave
              <select
                onChange={handleChange}
                onBlur={handleBlur}
                id="pixKeyType"
                className={`border-2 border-${
                  errors.pixKeyType && touched.pixKeyType ? "red-500" : "gray"
                } rounded h-8`}
                value={values.pixKeyType}
              >
                {Object.values(PixKeyTypes).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="pixKey" className="flex flex-col w-[370px]">
              Chave
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                id="pixKey"
                className={`border-2 border-${
                  errors.pixKey && touched.pixKey ? "red-500" : "gray"
                } rounded h-8`}
                value={values.pixKey}
              />
              {errors.pixKey && touched.pixKey && (
                <ErrorMessage>{errors.pixKey}</ErrorMessage>
              )}
            </label>
          </div>

          <footer className="flex justify-between mt-20">
            <Button
              theme="secondary"
              onClick={handleGoBackOnClick}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            {renderDeleteButton && (
              <Button
                theme="danger"
                className="w-[50px]"
                iconButton
                onClick={handleDeleteOnClick}
              >
                <TrashIcon className="h-5 w-5" />
              </Button>
            )}
            <Button
              theme="primary"
              type="submit"
              disabled={isSubmitting && !isValid}
            >
              Salvar
            </Button>
          </footer>
        </form>
      )}
    </Formik>
  );
};
