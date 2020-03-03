function RecipesService($http){
    this.getRecipes = function(){
        //return ingr = $http.get('./ingredients.json')
        return data;
    }

    var data = [ {"id": 1, "name": "Chicken Enchiladas", "ingredients": [
        {"name":"Vegetable Oil", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Skinless Boneless Chicken Breast", "amount":"1.5", "unit":"Pound(s)"},
        {"name":"Cumin Powder", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Garlic Powder", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Red Onion", "amount":"1", "unit":"Whole"},
        {"name":"Garlic", "amount":"2", "unit":"Clove(s)" },
        {"name":"Corn", "amount":"1", "unit":"Cup(s)"},
        {"name":"Green Chiles", "amount":"5", "unit":"Can(s)"},
        {"name":"Chipotle Chiles", "amount":"4", "unit":"Can(s)"},
        {"name":"Tomato", "amount":"1", "unit":"Can(s)"},
        {"name":"All-Purpose Flour", "amount":"0.5", "unit":"Teaspoon(s)"},
        {"name":"Corn Tortilla", "amount":"16", "unit":"Whole"},
        {"name":"Enchillada Sauce", "amount":"1.5", "unit":"Cup(s)"},
        {"name":"Cheddar Cheese", "amount":"1", "unit":"Cup(s)"}
    ]},
     {"id": 2, "name":"Chicken Parmesan","ingredients": [
        {"name":"Skinless Boneless Chicken Breast", "amount":"2", "unit":"Whole"},
        {"name":"Egg", "amount":"2", "unit":"Whole"},
        {"name":"Panko Bread Crumbs", "amount":"1", "unit":"Cup(s)"},
        {"name":"Parmesan Cheese", "amount":"0.75", "unit":"Cup(s)"},
        {"name":"All-Purpose Flour", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Olive Oil", "amount":"1", "unit":"Cup(s)"},
        {"name":"Tomato Sauce", "amount":"0.5", "unit":"Cup(s)"},
        {"name":"Mozzarella", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Basil", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Provolone Cheese", "amount":"0.5", "unit":"Cup(s)"}
    ]},
     {"id": 3, "name":"Juicest Hamburgers Ever", "ingredients": [
        {"name":"Egg", "amount":"1", "unit":"Whole"},
        {"name":"Bread Crumb", "amount":"0.75", "unit":"Cup(s)"},
        {"name":"Evaporated Milk", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Worcestershire Sauce", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Cayenne Pepper", "amount":".125", "unit":"Teaspoon(s)"},
        {"name":"Garlic", "amount":"2", "unit":"Clove(s)"}
    ]},
     {"id": 4, "name":"Garlic-Butter Steak", "ingredients": [
        {"name":"Butter", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Parsley", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Garlic", "amount":"0.5", "unit":"Teaspoon(s)"},
        {"name":"Soy Sauce", "amount":"0.25", "unit":"Teaspoon(s)"},
        {"name":"Beef Flat Iron Steak", "amount":"1", "unit":"Whole"}
    ]},
     {"id": 15,"name":"Easy Mongolian Beef", "ingredients": [
        {"name":"Flank Steak", "amount":"1", "unit":"Pound(s)"},
        {"name":"Cornstarch", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Canola Oil", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Ginger", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Soy Sauce", "amount":"1", "unit":"Tablespoon(s)"},
        {"name":"Dark Brown Sugar", "amount":"0.5", "unit":"Cup(s)"},
        {"name":"Scallion", "amount":"4", "unit":"Whole"}
    ]},
     {"id": 5 ,"name":"Garlic Butter Shrimp Scampi", "ingredients": [
        {"name":"Olive Oil", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Butter", "amount":"4", "unit":"Tablespoon(s)"},
        {"name":"Garlic Cloves", "amount":"5", "unit":"Clove(s)"},
        {"name":"Shrimp Prawns", "amount":"1.25", "unit":"Pound(s)"},
        {"name":"White Wine", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Red Pepper Flakes", "amount":"0.50", "unit":"Teaspoon(s)"},
        {"name":"Lemon Juice", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Parsley", "amount":"0.25", "unit":"Cup(s)"}
    ]},
     {"id": 16, "name":"Spiced Rum-Glazed Shrimp","ingredients": [
        {"name":"Shrimp", "amount":"1.50", "unit":"Pound(s)"},
        {"name":"Olive Oil", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Sweet Chili Sauce", "amount":"0.33", "unit":"Cup(s)"},
        {"name":"Soy Sauce", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Captain Morgan Spiced Rum", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Garlic", "amount":"2", "unit":"Clove(s)"},
        {"name":"Lime Juice", "amount":"1", "unit":"Whole"},
        {"name":"Red Pepper Flakes", "amount":"0.25", "unit":"Teaspoon(s)"},
        {"name":"Green Onion", "amount":"1", "unit":"Whole"}

    ]},
     {"id": 17, "name":"Shrimp Kung Pao Noodles", "ingredients": [
        {"name":"Spaghetti", "amount":"1", "unit":"Pound(s)"},
        {"name":"Sesame Oil", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Green Onion", "amount":"3", "unit":"Whole"},
        {"name":"Ginger", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Shrimp", "amount":"1", "unit":"Pound"},
        {"name":"Olive Oil", "amount":"1", "unit":"Tablespoon(s)"},
        {"name":"Garlic", "amount":"3", "unit":"Clove(s)"},
        {"name":"Cornstarch", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Soy Sauce", "amount":"0.33", "unit":"Cup(s)"},
        {"name":"Sweet Chili Sauce", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Chicken Broth", "amount":"0.50", "unit":"Cup(s)"},
        {"name":"Sriracha", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Rice Vinegar", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Peanut", "amount":"0.50", "unit":"Cup(s)"},
        {"name":"Bell Pepper", "amount":"2", "unit":"Whole"}

    ]},
     {"id": 6, "name":"Kosher Salmon Fillet", "ingredients": [
        {"name":"Salmon Fillet", "amount":"4", "unit":"Pound(s)"},
        {"name":"Lemon Juice", "amount":"6", "unit":"Tablespoon(s)"},
        {"name":"Olive Oil", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Garlic", "amount":"3", "unit":"Clove(s)"},
        {"name":"Salt", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Pepper", "amount":"0.75", "unit":"Teaspoon(s)"}

    ]},
     {"id": 7, "name":"Baked Flounder with Lemon and Butter", "ingredients": [
        {"name":"Flounder Fillet", "amount":"1.50", "unit":"Pound(s)"},
        {"name":"Salt", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Black Pepper", "amount":"0.125", "unit":"Teaspoon(s)"},
        {"name":"Butter", "amount":"4", "unit":"Tablespoon(s)"},
        {"name":"Lemon Juice", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Onion", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Paprika", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Garlic", "amount":"2", "unit":"Clove(s)"},
        {"name":"Mayonnaise", "amount":"0.50", "unit":"Cup(s)"},
        {"name":"Olive Oil", "amount":"2", "unit":"Tablespoon(s)"}

    ]},
     {"id": 8, "name":"Herbed Sea Bass Baked in Paper", "ingredients": [
        {"name":"Sea Bass", "amount":"4", "unit":"Whole"},
        {"name":"Parsley", "amount":"2", "unit":"Bunch(es)"},
        {"name":"Garlic", "amount":"5", "unit":"Clove(s)"},
        {"name":"Lemon Juice", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Olive Oil", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Greek Oregano", "amount":"1", "unit":"Tablespoon(s)"},
        {"name":"Tomato", "amount":"5", "unit":"Whole"},
        {"name":"White Wine", "amount":"1", "unit":"Cup(s)"}

    ]},
     {"id": 14, "name":"Baked Sole With Mint and Ginger", "ingredients": [
        {"name":"Petrale Sole Fillets", "amount":"2", "unit":"Pound(s)"},
        {"name":"Mint", "amount":"1", "unit":"Bunch(es)"},
        {"name":"Ginger", "amount":"1", "unit":"Whole"},
        {"name":"Vegetable Oil", "amount":"1", "unit":"Tablespoon(s)"},
        {"name":"Salt", "amount":"0.50", "unit":"Teaspoon(s)"},
        {"name":"Pepper", "amount":"0.75", "unit":"Teaspoon(s)"}

    ]},
     {"id": 11, "name":"Roasted Broccoli With Garlic", "ingredients": [
        {"name":"Broccoli", "amount":"1.50", "unit":"Pound(s)"},
        {"name":"Olive Oil", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Garlic", "amount":"3", "unit":"Clove(s)"}
    ]},
     {"id": 20, "name":"Grilled Beef with Broccoli", "ingredients": [
        {"name":"Garlic", "amount":"6", "unit":"Clove(s)"},
        {"name":"Ginger", "amount":"1", "unit":"Whole"},
        {"name":"Oyster Sauce", "amount":"0.75", "unit":"Cup(s)"},
        {"name":"Shaoxing Wine", "amount":"0.75", "unit":"Cup(s)"},
        {"name":"Soy Sauce", "amount":"0.75", "unit":"Cups"},
        {"name":"Toasted Sesame Oil", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Molasses", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Rice Vinegar", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Flank Steak", "amount":"1.50", "unit":"Pound(s)"},
        {"name":"Brocolli", "amount":"2", "unit":"Whole"}

    ]},
     {"id": 9, "name":"Classic Green Bean Casserole", "ingredients": [
        {"name":"Cream of Mushroom Soup", "amount":"1", "unit":"Can(s)"},
        {"name":"Milk", "amount":"0.50", "unit":"Cup(s)"},
        {"name":"Soy Sauce", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Green Beans", "amount":"4", "unit":"Cup(s)"},
        {"name":"Fried Onion", "amount":"1.33", "unit":"Cup(s)"}

    ]},
     {"id": 18, "name":"Buttery Garlic Green Beans", "ingredients": [
        {"name":"Green Beans", "amount":"1", "unit":"Pound(s)"},
        {"name":"Butter", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Garlic", "amount":"3", "unit":"Clove(s)"},
        {"name":"Lemon Pepper", "amount":"2", "unit":"Pinch(es)"}

    ]},
     {"id": 10, "name":"Stuffed Bell Peppers", "ingredients": [
        {"name":"Bell Pepper", "amount":"6", "unit":"Whole"},
        {"name":"Olive Oil", "amount":"4", "unit":"Tablespoon(s)"},
        {"name":"Ground Beef", "amount":"8", "unit":"Ounce(s)"},
        {"name":"Onion", "amount":"1", "unit":"Whole"},
        {"name":"Garlic", "amount":"2", "unit":"Clove(s)"},
        {"name":"Zucchini", "amount":"1", "unit":"Whole"},
        {"name":"Roma Tomato", "amount":"4", "unit":"Whole"},
        {"name":"Long-Grain Wild Rice", "amount":"1", "unit":"Cup(s)"},
        {"name":"Pepper Jack Cheese", "amount":"1.50", "unit":"Cuo(s)"}

    ]},
     {"id": 19, "name":"Sausage and Pepper Sheet-Pan Sandwiches", "ingredients": [
        {"name":"Sweet Italian Turkey Sausage Links", "amount":"1", "unit":"Pound(s)"},
        {"name":"Sweet Red Pepper", "amount":"3", "unit":"Whole"},
        {"name":"Onion", "amount":"1", "unit":"Whole"},
        {"name":"Olive Oil", "amount":"1", "unit":"Tablespoon(s)"},
        {"name":"Hot Dog Buns", "amount":"6", "unit":"Whole"},
        {"name":"Provolone Cheese", "amount":"6", "unit":"Slice(s)"}

    ]},
      {"id": 12, "name":"Basic Mashed Potatoes", "ingredients": [
        {"name":"Potato", "amount":"2", "unit":"Pound(s)"},
        {"name":"Butter", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Milk", "amount":"1", "unit":"Cup(s)"}

    ]},
      {"id": 21, "name":"Garlic Roasted Potatoes", "ingredients": [
        {"name":"Red or White Potato", "amount":"3", "unit":"Pound(s)"},
        {"name":"Olive Oil", "amount":"0.25", "unit":"Cup(s)"},
        {"name":"Salt", "amount":"1.50", "unit":"Teaspoon(s)"},
        {"name":"Pepper", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Parsley", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Garlic", "amount":"2", "unit":"Tablespoon(s)"}

    ]},
      {"id": 13, "name":"Spaghetti Sauce with Ground Beef", "ingredients": [
        {"name":"Ground Beef", "amount":"1", "unit":"Pound(s)"},
        {"name":"Onion", "amount":"1", "unit":"Whole"},
        {"name":"Garlic", "amount":"4", "unit":"Clove(s)"},
        {"name":"Green Bell Pepper", "amount":"1", "unit":"Whole"},
        {"name":"Diced Tomatoes", "amount":"1", "unit":"Can(s)"},
        {"name":"Tomato Sauce", "amount":"1", "unit":"Can(s)"},
        {"name":"Tomato Paste", "amount":"1", "unit":"Can(s)"},
        {"name":"Dried Oregano", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Dried Basil", "amount":"2", "unit":"Teaspoon(s)"},
        {"name":"Salt", "amount":"1", "unit":"Teaspoon(s)"},
        {"name":"Black Pepper", "amount":"0.50", "unit":"Teaspoon(s)"}

    ]},
      {"id": 22, "name":"Shrimp Fettuccine Alfredo", "ingredients": [
        {"name":"Fetuccine", "amount":"1", "unit":"Pound(s)"},
        {"name":"Butter", "amount":"3", "unit":"Tablespoon(s)"},
        {"name":"Shrimp", "amount":"1", "unit":"Pound(s)"},
        {"name":"Garlic", "amount":"2", "unit":"Clove(s)"},
        {"name":"All-Purpose Flour", "amount":"2", "unit":"Tablespoon(s)"},
        {"name":"Heavy Cream", "amount":"1", "unit":"Cup(s)"},
        {"name":"Whole Milk", "amount":"0.50", "unit":"Cup(s)"},
        {"name":"Egg Yolk", "amount":"1", "unit":"Whole"},
        {"name":"Parmesan", "amount":"1", "unit":"Cup(s)"},
        {"name":"Parsley", "amount":"", "unit":""},
        {"name":"", "amount":"1", "unit":"Tablespoon(s)"}
    ]}
    ]

};

angular
  .module('components.recipe')
  .service('RecipesService', RecipesService);
