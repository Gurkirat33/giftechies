import { ServiceForm } from "@/components/UI/ServiceForm";
import axios from "axios";

async function getData(id) {
  try {
    const res = await axios.get(`localhost:3000/api/get-services/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const emptyService = {
  imageUrl: "",
  heading: "",
  description: "",
  keyPoints: "",
  slug: "",
};

export default async function ServiceDetails({ params }) {
  const { id } = params;

  if (id === "new") {
    return <ServiceForm initialData={emptyService} id="new" />;
  }

  try {
    const data = await getData(id);

    if (!data) {
      return <div>Error loading service details</div>;
    }

    return <ServiceForm initialData={data.service} id={id} />;
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
