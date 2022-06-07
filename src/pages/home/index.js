import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "@material-ui/core/Button";

import Form from "components/form";
import Header from "components/header";
import FormInput from "components/form/input";

import resolvers from "config/resolvers";

const Home = () => {
  const navigate = useNavigate();

  const newData = JSON.parse(localStorage.getItem("firstPageData"));

  const { firstName, lastName, email } = newData || {};

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
    },
    resolver: resolvers.firstStep,
  });
  const onSubmit = (data) => {
    localStorage.removeItem("firstPageData");
    localStorage.setItem("firstPageData", JSON.stringify(data));
    navigate("/secondPage");
  };

  return (
    <>
      <Header
        value={33}
        stepInfoText={"1/3"}
        prevNavigation={"/?currentPage=/"}
      />
      <Form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="two-column">
          <FormInput
            fullWidth
            type="text"
            name="firstName"
            variant="outlined"
            control={control}
            placeholder={"First name"}
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
          />
          <FormInput
            fullWidth
            type="text"
            name="lastName"
            variant="outlined"
            control={control}
            placeholder={"Last name"}
            error={!!errors?.lastName}
            helperText={errors?.lastName?.message}
          />
        </div>
        <FormInput
          fullWidth
          type="text"
          name="email"
          variant="outlined"
          control={control}
          placeholder={"Email"}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="primary"
        >
          {"Next"}
        </Button>
      </Form>
    </>
  );
};

export default Home;
