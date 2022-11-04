import { ScrollView, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectFeaturedProducts,
  selectStatus,
} from "../store/productSlice";
import BannerTitle from '../components/text/banner-title';
import CategoryTitle from '../components/text/category-title';

export default function Headphones(selectHeadphones) {
  return (
    <View>
      <ScrollView>
        <BannerTitle>
          <CategoryTitle title='headphones'/>
        </BannerTitle>
      </ScrollView>
    </View>
  )
}