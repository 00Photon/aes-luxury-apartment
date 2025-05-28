import { API_BASE_URL } from "@/utils/constant"

// Define interfaces for form data
interface ReservationFormData {
  name: string;
  phone: string;
  location: string;
  checkIn: string;
  checkOut: string;
  departureTime: string;
  adults: string;
  children: string;
}

interface EventBookingFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventDetails: string;
}


// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  return response.json();
};

// Service to submit reservation form
export const submitReservation = async (formData: ReservationFormData) => {
  try {
    // Format the data to match the backend expectations
    const payload = {
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      check_in_date: new Date(formData.checkIn).toLocaleDateString("en-GB"), // Convert to dd/mm/yyyy
      check_out_date: new Date(formData.checkOut).toLocaleDateString("en-GB"), // Convert to dd/mm/yyyy
      departure_time: formData.departureTime || null,
      adults: parseInt(formData.adults, 10),
      children: parseInt(formData.children, 10),
    };

    const response = await fetch(`${API_BASE_URL}/make-reservation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await handleResponse(response);
  } catch (error: any) {
    throw new Error(error.message || "Failed to submit reservation");
  }
};

// Service to submit event booking form
export const submitEventBooking = async (formData: EventBookingFormData) => {
  try {
    // Format the data to match the backend expectations
    const payload = {
      name: formData.name,
      email: formData.email || null,
      phone: formData.phone,
      event_type: formData.eventType,
      event_date: new Date(formData.eventDate).toLocaleDateString("en-GB"), // Convert to dd/mm/yyyy
      additional_details: formData.eventDetails || null,
    };

    const response = await fetch(`${API_BASE_URL}/book-event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await handleResponse(response);
  } catch (error: any) {
    throw new Error(error.message || "Failed to submit event booking");
  }
};