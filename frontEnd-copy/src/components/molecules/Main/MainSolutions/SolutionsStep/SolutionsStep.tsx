import { SolutionsFormatted } from "../Formatted/SolutionsFormatted"
import { SolutionsStepProps } from "./SolutionsStep.types"
export const SolutionsStep : React.FC<SolutionsStepProps> = ({items}) => {
    return (
        <div>
            <SolutionsFormatted page="main" items={items.titleItem} defaultFontSize={"font-size-14px font-weight-600 line-height-14px letter-spacing-25 text-align-center vertical-align-middle"}/>
        </div>
    )
}
