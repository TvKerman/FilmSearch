import React, {useState} from 'react';
import Filter from "./UI/Filter/Filter";
import FilterLeft from "./UI/FilterLeft/FilterLeft";
import FilterSelect from "./UI/FilterSelect/FilterSelect";
import FilterSelectItem from "./UI/FilterSelectItem/FilterSelectItem";
import classes from "./UI/FilterSelect/FilterSelect.module.css";
import {useActions} from "../hooks/useActions";

const FilmFilter = () => {
    const [isActiveFirstFilter, setActiveFilter1] = useState(false);
    const [isActiveSecondFilter, setActiveFilter2] = useState(false);
    const {sortFilms} = useActions();

        const filterContent = [
        {name: "Рейтингу", icon: null},
        {name: "Дате", icon: null}
    ]
    const [filterState, setFilterState] = useState([
        {id: 1, value: false},
        {id: 2, value: false}
    ])

    const predicate = (element1, element2) => {
        const ratingValue1 = parseFloat(element1.imdb);
        const ratingValue2 = parseFloat(element2.imdb);
        const year1 = parseInt(element1.Year.substring(0, 4))
        const year2 = parseInt(element2.Year.substring(0, 4))
        if (filterState[0].value) {
            if (ratingValue1 > ratingValue2) {
                return -1;
            }
            if (ratingValue2 > ratingValue1) {
                return 1;
            }

            if (!filterState[1].value) {
                return 0;
            }
        }
        if (year1 > year2) {
            return -1;
        }
        if (year2 > year1) {
            return 1;
        }
        return 0;
    }

    const applyFilter = () => {
        if (filterState[0].value || filterState[1].value) {
            sortFilms(predicate)
        }
    }

    const setFilter = (value, index) => {
        let tmp = [...filterState]
        tmp[index] = {...tmp[index], value: value}
        console.log(tmp, value)
        setFilterState(tmp)
    }

    const clickFilter = () => {
        if (isActiveSecondFilter) {
            setActiveFilter2(!isActiveSecondFilter)
        }
        setActiveFilter1(!isActiveFirstFilter)
    }

    const clickFilterInfo = () => {
        if (isActiveFirstFilter) {
            setActiveFilter1(!isActiveFirstFilter)
        }
        setActiveFilter2(!isActiveSecondFilter)
    }

    return (
        <Filter>
            <FilterLeft>
                <FilterSelect
                    isActive={isActiveFirstFilter}
                    onClickButton={applyFilter}
                    setActive={clickFilter}
                    nameSelect="Сортировать по"
                >
                    {filterContent.map((content, index) =>
                        <FilterSelectItem
                            check={filterState[index].value}
                            key={index}
                            idItem={index}
                            setFilter={setFilter}
                            styleForIcon={content.icon}
                        >
                            {content.name}
                        </FilterSelectItem>
                    )}
                </FilterSelect>
                <FilterSelect
                    isActive={isActiveSecondFilter}
                    onClickButton={applyFilter}
                    setActive={clickFilterInfo}
                    nameSelect="Информация о фильтре"
                    visibleButton={false}
                >
                    <div className={classes.FilterSelectLabel} style={{padding: "10px", textTransform: "none"}}>
                        Данный фильтр был добавлен на сайт только потому, что того требует задание.
                        Реализация фильтра сортировки в данном случае не уместна, так как сервис OMDb API использует постраничную выдачу информации.
                        Сортировка происходит только по нажатию кнопки "Применить".
                    </div>
                </FilterSelect>
            </FilterLeft>
        </Filter>
    );
};

export default FilmFilter;