import { images, offers } from "@/constants";
import "./global.css"
import { FlatList, Pressable, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fragment } from "react";
import cn from 'clsx';
import CartButton from "@/components/CartButton";
 
export default function Index() {
  return (
    
    <SafeAreaView className="flex-1 bg-white">
      <FlatList 
        data ={offers}
        renderItem={({item, index})=> {
          const isEven = index % 2 === 0; //TO STYLE ALTERNATE ITEMS DIFFERENTLY (the position of the title and image)
          // run this command in the terminal 'npm install clsx' to conditionally apply classes 
          return (
            <View>
              {/* create an alternating layout */}
              <Pressable className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')} 
                style={{backgroundColor: item.color}}
                android_ripple={{ color:"#fffff222"}} //adds a ripple effect on press for android
                > 
                {({pressed})=> (
                  <Fragment>
                    {/* images */}
                    <View className="h-full w-1/2">
                      <Image
                        source={item.image}
                        className="size-full"
                        resizeMode="contain"
                      />
                    </View>

                    {/* title '__info to indicate this is the info part of the offer card' */}
                    <View className={cn("offer-card__info", isEven ? 'pl-10' : 'pr-10')}>
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          )
        }}
        contentContainerClassName="pb-28 px-5"

          // HEADER CONTENT
          ListHeaderComponent={() => (
          <View className="flex-between flex-row w-full my-5 px-5">

            {/* location */}
            <View className="flex-start">
              <Text className="small-bold text-primary">DELIVER TO</Text>
              <TouchableOpacity className="flex-row flex-center gap-x-1 mt-0.5">
                <Text className="paragraph-bold text-dark-100">Bahrain</Text>
                <Image
                  source={images.arrowDown}
                  className="size-3"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* cart */}
            <CartButton />
          </View>
          
        )}
      />
    </SafeAreaView>
  );
}