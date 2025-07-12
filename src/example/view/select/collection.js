"use strict";

import withStyle from "easy-with-style";  ///

import { Select } from "easy";

import collectionMap from "../../collectionMap";

import { collectionNames } from "../../collectionMap";

class CollectionSelect extends Select {
  getCollectionName() {
    const value = this.getValue(),
          collectionName = value; ///

    return collectionName;
  }

  childElements() {
    const options = collectionNames.map((collectionName, index) => {
            const collection = collectionMap[collectionName],
                  { title } = collection,
                  value = collectionName, ///
                  html = title; ///

            return (

              <option value={value}>{html}</option>

            )
          }),
          childElements = options;  ///

    return childElements;
  }

  static defaultProperties = {
    className: "collections"
  }
}

export default withStyle(CollectionSelect)`

  width: 32rem;
  margin: 1rem;
  border: 1px solid black;
  padding: 0.25rem;
  font-size: 2rem;
  font-family: serif;
  
`;
