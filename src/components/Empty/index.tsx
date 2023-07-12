import { Text, TextInput, View, Image } from "react-native";
import clipboard from "../../assets/clipboard.png";
import { styles } from "./styles";

export default function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={clipboard} style={styles.image} />
      <Text style={styles.textBold}>
        Você ainda não possui tarefas cadastradas
      </Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie tarefas e organize seus itens
      </Text>
    </View>
  );
}
