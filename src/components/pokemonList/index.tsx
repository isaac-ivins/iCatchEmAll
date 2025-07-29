import { ExtendedTheme, useTheme } from '@react-navigation/native';
import RNText from 'components/text';
import { FC, useMemo } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
  ScrollViewProps,
} from 'react-native';
import { useMainAppStore } from 'store/main';
import { PokeDexPokemonType } from 'types/graphql';
import { RNTextEnum } from '../../../designLib/types/typography';
import { capFirstLetter } from 'helpers';

interface PokemonListProps extends ScrollViewProps {
  data: PokeDexPokemonType[];
  onPress: (pokemon: PokeDexPokemonType) => void;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const PokemonList: FC<PokemonListProps> = ({
  data,
  onPress,
  refreshing = false,
  onRefresh = undefined,
  ...rest
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const currentTrainer = useMainAppStore((state) => state.currentTrainer);

  return (
    <FlatList<PokeDexPokemonType>
      data={data}
      {...rest}
      showsVerticalScrollIndicator={false}
      extraData={currentTrainer?.favoritePokemons}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={styles.cellWrapper}
          >
            <View style={styles.cellContainer}>
              <RNText type={RNTextEnum.p1}>{capFirstLetter(item.name)}</RNText>
            </View>
          </TouchableOpacity>
        );
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const createStyles = ({ layout, colors }: ExtendedTheme) => {
  return StyleSheet.create({
    cellWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cellContainer: {
      borderWidth: 1,
      borderColor: colors.border,
      marginVertical: layout.scaledY.xxSmall,
      paddingHorizontal: layout.scaledX.medium,
      paddingVertical: layout.scaledY.xSmall,
      borderRadius: layout.scaledX.xSmall,
    },
  });
};

export default PokemonList;
