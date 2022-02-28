import { Image } from "react-native-web";

export default function Image(props) {
  return <Image source={props.source} alt={props.alt} />;
}
