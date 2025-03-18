import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { useContext } from "react";
import { Input } from "@heroui/input";
import { ToastProvider } from "@heroui/toast";

import DefaultLayout from "@/layouts/default";
import { formFields } from "@/config/form";
import { VoiceForm } from "@/types/voice-form";
import VoiceFormContext from "@/contexts/voice-form/context";

export default function IndexPage() {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { form, updateForm } = context;

  const reset = () => {
    updateForm({} as VoiceForm);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    updateForm(data);
  };

  return (
    <DefaultLayout>
      <ToastProvider placement={"bottom-center"} />
      <Form
        autoComplete={"off"}
        className="w-full flex flex-col gap-4"
        onReset={reset}
        onSubmit={submit}
      >
        {formFields.map((field) => (
          <Input
            key={field.name}
            errorMessage={field.errorMessage}
            isRequired={field.isRequired}
            label={field.label}
            labelPlacement="outside"
            name={field.name}
            placeholder={field.placeholder}
            type={field.type}
            value={form?.[field?.name as keyof VoiceForm] || ""}
            onChange={(e) => {
              updateForm({
                ...form,
                [field.name]: e.target.value,
              });
            }}
          />
        ))}
        <div className="flex flex-col gap-2 w-full">
          <Button fullWidth color="primary" type="submit">
            提交
          </Button>
          <Button
            type="reset"
            variant="flat"
            onPress={() =>
              updateForm({
                activityName: "",
                orderType: "",
                activityProd: "",
                activityPrice: "",
                count: "",
                gift: "",
              })
            }
          >
            重置
          </Button>
        </div>
      </Form>
    </DefaultLayout>
  );
}
