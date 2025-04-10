import { useTranslation } from "react-i18next";
import { PricingPlansProps, PricingItem } from "./PricingPlans.types"
import {PricingItemProps} from "@/constants/items/Main/Pricing/Pricing.types"
import { Span } from "@/components/atoms/Span/Span";
import styles from "./PricingPlans.module.css";
import { NavLinkSpan } from "@/components/molecules/Basic/NavLink/NavLinkSpan/NavLinkSpan";
import { PricingContent } from "@/components/molecules/Main/MainPricing/PricingContent/PricingContent";

export const PricingPlans : React.FC<PricingPlansProps> = ({items}) => {
    
    const {t} = useTranslation("main");
    


    const pricingItems : PricingItem = {
        free :  {
            price : 0,
            monthlyFee : 0,
            contents : {
                forms : 1,
                uploadLine : 30,
                monthlyLine : 300,
                api : false,
            },
        },
        regular : {
            price : 100000,
            monthlyFee : 50000,
            contents : {
                forms : 3,
                formCode : 3000,
                uploadLine : 1000,
                monthlyLine : 10000,
                api : true,
            },                      
        },
        special : {
            price : 100000,
            monthlyFee : 80000,
            contents : {
                forms : 15,
                formCode : 10000,
                uploadLine : 10000,
                monthlyLine : 100000,
                api : true,
            },          
        }           
    }

    return (
        <div className={styles.pricingPlans}>
            {Object.entries(items).map(([key, item]: [string, PricingItemProps], index: number) => {

                const itemKey = key as 'free' | 'regular' | 'special';

                return (
                    <div key = {`${itemKey}-${index}`} className={styles.item}>
                        <div className={styles.itemTitle}>
                        <Span fontSize="font-size-18px font-weight-600 line-height-100 line-spacing-25 white-space-nowrap">
                            {t(item.title)}
                        </Span>
                        {key !== "free" && 
                            <div className={styles.itemPrice}>
                                <Span fontSize="font-size-12px font-weight-600 line-height-100 line-spacing-25 text-align-center white-space-nowrap">
                                    {t(item.membership.titleKey) + " " + pricingItems[itemKey].price.toLocaleString() + t(item.membership.descriptionKey)} 
                                </Span>
                            </div>
                        }
                        </div>
                        <div className={`${styles.monthlyFee} ${styles[itemKey]}`}>
                            <Span fontSize="font-size-52px font-weight-600 line-height-100 line-spacing-25 white-space-nowrap">
                                {itemKey === "free" ? "Free" : pricingItems[itemKey].monthlyFee.toLocaleString() + t(item.subscription.titleKey)}
                            </Span>
                            {itemKey !== "free" &&
                            <div className={styles.itemPriceDescription}>
                                <Span fontSize="font-size-18px font-weight-600 line-height-100 line-spacing-25 white-space-nowrap">
                                    {t(item.subscription.descriptionKey)}
                                </Span>
                            </div>
                            }
                        </div> 
                        <div className={styles.itemContents}>
                            {item.description.map((content, index) => (
                                <div key={`${itemKey}-${index}`} className={styles.itemPriceDescription}>
                                    <Span fontSize="font-size-14px font-weight-400 line-height-140 line-spacing-25 white-space-nowrap">
                                        {t(content)}
                                    </Span>
                                </div>
                            ))}
                        </div>
                        <PricingContent items={pricingItems[itemKey].contents}/>
                        <div className={`${styles.itemButton} ${styles[itemKey]}`}>
                            <NavLinkSpan 
                                fontSize="font-size-18px font-weight-600 line-height-100 line-spacing-25 text-align-center"
                                variant="item" 
                                style={itemKey} 
                                baseRouteKey="MAIN" 
                                pageRouteKey="MAIN" 
                                text={t(item.button)} 
                            />
                        </div>
                </div>
            )
            })}
        </div>
    )
}
