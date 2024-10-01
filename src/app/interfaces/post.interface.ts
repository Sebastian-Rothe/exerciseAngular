import { FormsModule } from "@angular/forms";

export interface PostInterface {
    name: string;
    img: string;
    likes: number;
    liked?: boolean;
    comments: string[];
}
