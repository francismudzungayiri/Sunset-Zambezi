function validateBooking(data) {
  const errors = {};

  if (typeof data.full_name !== "string" || data.full_name.trim() === "") {
    errors.full_name = "Full name is required";
  }

  if (
    typeof data.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    errors.email = "Valid email is required";
  }

  if (typeof data.country !== "string" || data.country.trim() === "") {
    errors.country = "Country is required";
  }

  if (typeof data.phone !== "string" || data.phone.trim() === "") {
    errors.phone = "Phone is required";
  }

  if (typeof data.check_in !== "string" || data.check_in.trim() === "") {
    errors.check_in = "Check-in date is required";
  }

  if (typeof data.check_out !== "string" || data.check_out.trim() === "") {
    errors.check_out = "Check-out date is required";
  }

  if (!Number.isInteger(data.guests) || data.guests <= 0) {
    errors.guests = "Guests must be a positive integer";
  }

  if (typeof data.room_type !== "string" || data.room_type.trim() === "") {
    errors.room_type = "Room type is required";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = { validateBooking };
