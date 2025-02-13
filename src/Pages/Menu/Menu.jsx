import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            {/* main cover */}

            <SectionTitle subHeading={'Don"t miss '} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory items={dessert} title={'Dessert'} img={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={'Pizza'} img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title={'Salad'} img={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title={'Soup'} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;