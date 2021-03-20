import React from "react";

import {
  Drawer as AppDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Drawer = () => {
  const itemList = [
    {
      text: "Item A",
    },
    {
      text: "Item B",
    },
    {
      text: "Item C",
    },
    {
      text: "Item D",
    },
  ];
  return (
    <AppDrawer>
      <List>
        {itemList.map((item, index) => {
          const { text } = item;
          return (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </AppDrawer>
  );
};

export default Drawer;
