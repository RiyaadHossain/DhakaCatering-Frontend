/* import { getToken } from "./token"
import { useUpdatePackageMutation } from "../features/package/packageAPI"

export const useUpdatePackageViews = (id) => {
    // console.log(viewCount)
    let packageData = {viewCount: 1};
    const token = getToken()
    const [updateView] = useUpdatePackageMutation()

    // if (sellCount) packageData.sellCount = sellCount
    // if (viewCount) packageData.viewCount = viewCount

    updateView({ token, id, packageData })

    return [updateView]
}  */