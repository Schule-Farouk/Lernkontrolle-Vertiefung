import React, { useState } from 'react';
import './Aufgabe2.css';

const Menu = () => {
  const [selections, setSelections] = useState({
    drinks: {
      coffee: false,
      tea: false,
      soda: false
    },
    food: {
      burger: false,
      pizza: false,
      salad: false
    },
    dessert: {
      iceCream: false,
      cake: false,
      pie: false
    }
  });

  const [subOptions, setSubOptions] = useState({
    food: {
      burger: {
        cheese: false,
        bacon: false,
        lettuce: false
      },
      pizza: {
        pepperoni: false,
        mushrooms: false,
        olives: false
      },
      salad: {
        chicken: false,
        croutons: false,
        dressing: false
      }
    },
    dessert: {
      iceCream: {
        chocolateSauce: false,
        sprinkles: false,
        nuts: false
      },
      cake: {
        frosting: false,
        fruit: false,
        whippedCream: false
      },
      pie: {
        vanillaIceCream: false,
        whippedCream: false,
        caramelDrizzle: false
      }
    }
  });

  const [order, setOrder] = useState(null);

  const handleMainChange = (category, item) => {
    setSelections({
      ...selections,
      [category]: {
        ...selections[category],
        [item]: !selections[category][item]
      }
    });
  };

  const handleSubChange = (category, item, subItem) => {
    setSubOptions({
      ...subOptions,
      [category]: {
        ...subOptions[category],
        [item]: {
          ...subOptions[category][item],
          [subItem]: !subOptions[category][item][subItem]
        }
      }
    });
  };

  const handleFinishOrder = () => {
    const selectedDrinks = Object.entries(selections.drinks)
      .filter(([drink, selected]) => selected)
      .map(([drink]) => drink);

    const selectedFood = Object.entries(selections.food)
      .filter(([item, selected]) => selected)
      .map(([item]) => {
        const subOptionsForItem = Object.entries(subOptions.food[item])
          .filter(([subItem, selected]) => selected)
          .map(([subItem]) => subItem);
        return { item, subOptions: subOptionsForItem };
      });

    const selectedDesserts = Object.entries(selections.dessert)
      .filter(([item, selected]) => selected)
      .map(([item]) => {
        const subOptionsForItem = Object.entries(subOptions.dessert[item])
          .filter(([subItem, selected]) => selected)
          .map(([subItem]) => subItem);
        return { item, subOptions: subOptionsForItem };
      });

    const orderDetails = {
      drinks: selectedDrinks,
      food: selectedFood,
      dessert: selectedDesserts
    };

    setOrder(orderDetails);
  };

  return (
    <div className="menu">
      <h1>Menu</h1>

      <h2>Getränke:</h2>
      {Object.entries(selections.drinks).map(([drink, selected]) => (
        <div key={drink}>
          <label>
            <input
              type="checkbox"
              checked={selected}
              onChange={() => handleMainChange('drinks', drink)}
            />
            {drink}
          </label>
        </div>
      ))}

      <h2>Essen:</h2>
      {Object.entries(selections.food).map(([item, selected]) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              checked={selected}
              onChange={() => handleMainChange('food', item)}
            />
            {item}
          </label>
          {selected && (
            <div className="sub-options">
              {Object.entries(subOptions.food[item]).map(([subItem, selected]) => (
                <label key={subItem}>
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => handleSubChange('food', item, subItem)}
                  />
                  {subItem}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <h2>Dessert:</h2>
      {Object.entries(selections.dessert).map(([item, selected]) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              checked={selected}
              onChange={() => handleMainChange('dessert', item)}
            />
            {item}
          </label>
          {selected && (
            <div className="sub-options">
              {Object.entries(subOptions.dessert[item]).map(([subItem, selected]) => (
                <label key={subItem}>
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => handleSubChange('dessert', item, subItem)}
                  />
                  {subItem}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <button onClick={handleFinishOrder}>Bestellung abschließen</button>

      {order && (
        <div className="order-summary">
          <h2>Bestellung zusammenfassung:</h2>
          <h3>Getränke:</h3>
          <ul>
            {order.drinks.map((drink, index) => (
              <li key={index}>{drink}</li>
            ))}
          </ul>
          <h3>Essen:</h3>
          <ul>
            {order.food.map((foodItem, index) => (
              <li key={index}>
                {foodItem.item}
                {foodItem.subOptions.length > 0 && (
                  <ul>
                    {foodItem.subOptions.map((subItem, index) => (
                      <li key={index}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <h3>Dessert:</h3>
          <ul>
            {order.dessert.map((dessertItem, index) => (
              <li key={index}>
                {dessertItem.item}
                {dessertItem.subOptions.length > 0 && (
                  <ul>
                    {dessertItem.subOptions.map((subItem, index) => (
                      <li key={index}>{subItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
