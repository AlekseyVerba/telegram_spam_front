import { Dispatch, SetStateAction } from "react";
import { Button, ButtonTheme } from "shared/components/Button";

interface Props {
    image?: File | null
    setImage: (arg: File | null) => void
}

export const UploadImage = (props: Props) => {
    const { image, setImage } = props

    return (
        <div>
          {image && (
            <div>
              <img
                alt="not found"
                width={"250px"}
                src={URL.createObjectURL(image)}
              />
              <br />
              <Button theme={ButtonTheme.ERROR} onClick={() => setImage(null)}>Remove</Button>
            </div>
          )}
    
          <br />

          <input
            type="file"
            name="myImage"
            onChange={(event) => {
                const files = event?.target?.files;

                if (files && files.length) {
                    setImage(files[0])
                }
            }}
          />
        </div>
      );
}