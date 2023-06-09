import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ChatItem } from '../components/ChatItem';
import { ChatsScreenHeader } from '../components/ChatsScreenHeader';
import { NewChatButton } from '../components/NewChatButton';
import { fetchData } from '../helpers/fetchData';
import { IChatData } from '../interfaces/chatItem';
import { colors } from '../assets/constants';

const renderItem: ListRenderItem<IChatData> = ({ item }) => <ChatItem data={item} />;

export const ChatsScreen = () => {
  const { users } = useAppSelector((state) => state.chats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <ChatsScreenHeader title='Chats' />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={renderItem}
        keyExtractor={(item: IChatData) => item.userId}
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
      />

      <NewChatButton routeName='NewChat' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: colors.white,
    flex: 1,
    position: 'relative',
  },
});
