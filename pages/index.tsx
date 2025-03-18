import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { useContext, useState } from "react";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";

import DefaultLayout from "@/layouts/default";
import { formFields } from "@/config/form";
import { VoiceForm } from "@/types/voice-form";
import VoiceFormContext from "@/contexts/voice-form/context";

export default function IndexPage() {
  const [loading, setLoading] = useState(false);

  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { form, updateForm, setVoiceText, fetching } = context;

  const reset = () => {
    updateForm({
      activityName: "",
      orderType: "",
      activityProd: "",
      activityPrice: "",
      count: "",
      gift: "",
    });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    updateForm(data);
    setTimeout(() => {
      addToast({
        title: "已提交",
        color: "success",
        timeout: 2000,
      });
      reset();
      setVoiceText("");
      setLoading(false);
    }, 2000);
  };

  return (
    <DefaultLayout>
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
            isReadOnly={fetching}
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
          <Button
            fullWidth
            color="primary"
            isDisabled={fetching}
            isLoading={loading}
            type="submit"
          >
            提交
          </Button>
          <Button isDisabled={fetching} type="reset" variant="flat">
            重置
          </Button>
        </div>
      </Form>
    </DefaultLayout>
  );
}
