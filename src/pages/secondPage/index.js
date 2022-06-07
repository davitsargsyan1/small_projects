import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Form from "components/form";
import Header from "components/header";
import FormRadio from "components/form/radio";
import FormDatePicker from "components/form/datePicker";

const SecondPage = () => {
  const navigate = useNavigate();

  const newData = JSON.parse(localStorage.getItem("secondPageData"));

  const { gender, date } = newData || {};

  const { control, handleSubmit } = useForm({
    defaultValues: {
      gender: gender,
      date: date || new Date().toISOString().split("T")[0],
    },
  });

  const onSubmit = ({ gender = "female", date }) => {
    localStorage.removeItem("secondPageData");
    localStorage.setItem(
      "secondPageData",
      JSON.stringify({ gender: gender, date: date })
    );
    navigate("/thirdPage");
  };

  return (
    <>
      <Header
        value={66}
        stepInfoText={"2/3"}
        prevNavigation={"/?currentPage=secondPage"}
      />
      <Form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="two-column-parent">
          <FormRadio
            name="gender"
            value={gender}
            control={control}
            className="two-column"
          />
        </div>
        <FormDatePicker name="date" value={date} control={control} />
        <Button
          fullWidth
          size="large"
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          {"Next"}
        </Button>
      </Form>
    </>
  );
};

export default SecondPage;
