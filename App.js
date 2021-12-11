/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  FlatList,
} from 'react-native';
import {FAB} from 'react-native-paper';

const SCREEN = Dimensions.get('screen');
const HEIGHT = SCREEN.height;
const WIDTH = SCREEN.width;

const Section = ({title, description}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text numberOfLines={4} style={styles.sectionDescription}>
        {description}
      </Text>
    </View>
  );
};

const App = () => {
  const similarImages = [
    'https://img.freepik.com/free-vector/headphones-background-design_1063-131.jpg?size=338&ext=jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEMMjgKNxJmxhvaM0xZqjLgTilhH6_QfqbA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR88HFtu_5Bk1purTnLGCF1G488nq8wef21Ew&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8F1S4mqCspa8d0lI93IEQCNf2FaRy5TLOZQ&usqp=CAU',
  ];

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./assets/boatRockerz.png')}
          />
        </View>
        <Text style={styles.productBrand}>boAt</Text>
        <Text style={styles.productTitle}>boAt Rockerz 5000</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>Rs. 720/-</Text>
          <Text style={styles.actualPrice}>800/-</Text>
          <Text style={styles.discount}>10%</Text>
        </View>
        <Text style={styles.productDescription}>Product Description</Text>
        <Text style={styles.description}>
          You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for
          murder. After the avalanche, it took us a week to climb out. Now, I
          don't know exactly when we turned on each other, but I know that seven
          of us survived the slide... and only five made it out. Now we took an
          oath, that I'm breaking now. We said we'd say it was the snow that
          killed the other two, but it wasn't. Nature is lethal but it doesn't
          hold a candle to man. You think water moves fast? You should see ice.
          It moves like it has a mind. Like it knows it killed the world once
          and got a taste for murder. After the avalanche, it took us a week to
          climb out. Now, I don't know exactly when we turned on each other, but
          I know that seven of us survived the slide... and only five made it
          out. Now we took an oath, that I'm breaking now. We said we'd say it
          was the snow that killed the other two, but it wasn't. Nature is
          lethal but it doesn't hold a candle to man.
        </Text>
        <Button style={styles.addToCart} title="ADD TO CART" />
        <Section
          title="Delivery Date"
          description="Estimated delivery by 18th December 2021"
        />
        <Section
          title="Cancellation Policy"
          description="Order can only be cancelled within 10 days of placing the order. After 10 days, no cancellation option for refund/exhange product will be provided"
        />
        <Section
          title="Refund Policy"
          description="Full refund will be provided if order is cancelled within 10 days of confirmation. After 10 days, no refund amount wil be provied."
        />
        <Text style={styles.similarImagesText}>Similar Products</Text>
        <FlatList
          horizontal
          data={similarImages}
          renderItem={({item}) => (
            <Image style={styles.similarImage} source={{uri: item}} />
          )}
          keyExtractor={item => item}
        />
      </ScrollView>
      <FAB style={styles.addToCart} icon="shoppingcart" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'teal',
    fontWeight: 'bold',
    width: WIDTH / 3,
  },
  sectionDescription: {
    fontSize: 18,
    width: WIDTH / 2,
  },
  highlight: {
    fontWeight: '700',
  },
  sectionColor: {
    color: 'white',
  },
  imageContainer: {
    borderColor: 'lightgrey',
    borderWidth: 2,
  },
  image: {
    height: HEIGHT / 2,
    width: WIDTH,
    resizeMode: 'contain',
  },
  productBrand: {
    margin: 5,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    color: 'white',
    width: '20%',
    textAlign: 'center',
  },
  productTitle: {
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 20,
  },
  productDescription: {
    fontWeight: 'bold',
    margin: 8,
    fontSize: 18,
  },
  priceContainer: {
    width: 200,
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  productPrice: {
    color: 'green',
    fontSize: 24,
  },
  actualPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
    alignSelf: 'center',
  },
  discount: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 6,
  },
  addToCart: {
    backgroundColor: 'teal',
    position: 'absolute',
    bottom: 0,
    right: 16,
  },
  description: {
    margin: 8,
  },
  similarImagesText: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  similarImage: {
    width: 100,
    height: 100,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default App;
