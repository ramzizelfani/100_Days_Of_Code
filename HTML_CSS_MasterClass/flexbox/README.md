#### How flexbox works

- Setting dispaly:flex; within a container div will create a flex container for All direct child elements (called flex items)
- By default flex items are stacked/alligned horizantally (through the main axis). setting flex-direction to vertical will allign the vertically
- A flex display has two axes (The main axis: horizantal by default & the cross axis)
- some of the flex css properties that could be used to allign flex items:
  - justify-content: Align along the main axis (horizantal by default).
  - align-items: Align items along the cross axis (Vertical).
  - align-content: Align when extra space in cross axis (Basically if we have multiple rows of flex items, it will align those).
