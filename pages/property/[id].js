import { Box, Flex,Spacer, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollBar from "../../components/imageScrollbar";

const PropertyDetails = ({propertyDetails:{price, rentFrequency, rooms, title, bath, area, agency, isVerified, description, type, purpose, furnishuingStatus, amenities, photos}}) => (
  <Box maxWidht='1000px' margin='auto' p='4'>
   { photos && <ImageScrollBar data={photos}/> }

  </Box>
);
export default PropertyDetails;
export async function getServerSideProps ({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/details?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    }
  }
}