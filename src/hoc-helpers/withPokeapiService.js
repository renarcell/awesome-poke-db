import { PokeapiServiceCunsumer } from "../components/pokeapiServiceContext";

export default function withPokeapiService(View) {
	return (props) => (
		<PokeapiServiceCunsumer>
			{
				(service) => <View {...props} service={service}/>
			}
		</PokeapiServiceCunsumer>
	)
}