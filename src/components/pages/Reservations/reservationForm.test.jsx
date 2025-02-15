import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from "./reservationForm";

describe("Reservation form", () => {
  const availableTimes = ["17:00", "17:30"];
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("default value should render correctly", async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId("reservation-time-option");
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(
      `reservation-occasion-option`
    );
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "reservation-date");
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "reservation-time");
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute(
      "id",
      "reservation-number-guests"
    );
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "reservation-occasion");
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("should successfully submit form with default values", () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "Birthday",
    });
  });

  test(`should display an error message and disable sumbit button when date
    field's value is empty`, () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please select date");
    expect(submitButton).toBeDisabled();
  });

  test(`should display an error message and disable sumbit button when number of  
    guests field's value is empty`, () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    fireEvent.blur(numberOfGuestsInput);
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Please enter a number between 1 and 10"
    );
    expect(submitButton).toBeDisabled();
  });
});
