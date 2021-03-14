import React from "react"
import Layout from ".."
import Categories from "../../Categories"
import CategoriesItem from "../../CategoriesItem"
import CategoryCard from "../../CategoryCard"
import DescriptionPanel from "../../Panels/Description"
import Title from "../../Title"

const PlaceGuide = ( props ) => {
    return (
      <>
        <Title title={'✨ Awesome list of amazing places in ' + props.data.city_location}></Title>
        <DescriptionPanel>
          <p>{props.data.city_description}</p>
          <div className="mt-4">
            <Categories data={props.data}/>
          </div>
          {/* <CategoryCard category_emoji="🇳🇱" category_name="test" /> */}
          </DescriptionPanel>

          <CategoriesItem data={props.data}/>
      </>
    )
}

export default PlaceGuide
