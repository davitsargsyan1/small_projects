import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "@material-ui/core/Button";

import Form from "components/form";
import FormInput from "components/form/input";
import FormSelect from "components/form/select";
import Header from "components/header";

import resolvers from "config/resolvers";

const ThirdPage = () => {
  const navigate = useNavigate();

  const thirdPageData = JSON.parse(localStorage.getItem("thirdPageData"));
  const firstPageData = JSON.parse(localStorage.getItem("firstPageData"));
  const secondPageData = JSON.parse(localStorage.getItem("secondPageData"));

  const { company, position } = thirdPageData || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company,
      position,
    },
    resolver: resolvers.thirdStep,
  });

  const onSubmit = (data) => {
    localStorage.removeItem("thirdPageData");
    localStorage.setItem("thirdPageData", JSON.stringify(data));
    navigate("/thirdPage");

    console.log(
      {
        ...firstPageData,
        ...secondPageData,
        ...data,
      },
      "User Created !!"
    );
  };

  const positions = [
    { label: "Junior", value: "Junior" },
    { label: "Middle", value: "Middle" },
    { label: "Senior", value: "Senior" },
  ];

  return (
    <>
      <Header
        value={100}
        stepInfoText={"3/3"}
        prevNavigation={"/secondPage?currentPage=thirdPage"}
      />
      <Form onSubmit={handleSubmit(onSubmit)} className="row">
        <FormInput
          fullWidth
          type="text"
          name="company"
          control={control}
          variant="outlined"
          placeholder={"Company name"}
          error={errors?.company}
          helperText={errors?.company?.message}
        />
        <FormSelect
          fullWidth
          name="position"
          label="Position"
          control={control}
          variant="outlined"
          options={positions}
          sx={{ m: 0, minWidth: 300 }}
          placeholder="--Select one --"
          error={errors?.position}
          helperText={errors?.position?.message}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          color="primary"
          variant="contained"
        >
          {"Submit"}
        </Button>
      </Form>
    </>
  );
};

export default ThirdPage;
