import { View } from 'react-native';
import { Image } from 'react-native';


type ItemProps = {
    url : string //Image URL
}

export function ListItemComponent(props : ItemProps){
    return (
        <View>
            <Image 
                source={{uri: props.url}}
                style={{flex:1, minHeight:250, minWidth:180}}
            />
        </View>
    )
}