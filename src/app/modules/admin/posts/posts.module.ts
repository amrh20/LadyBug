import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostIndexComponent } from "./views/post-index/post-index.component";
import { PostTypeComponent } from "./views/post-type/post-type.component";
import { PostTypeCreateComponent } from "./views/post-type-create/post-type-create.component";
import { PostBlockedComponent } from "./views/post-blocked/post-blocked.component";
import { TypeBlockedComponent } from "./views/type-blocked/type-blocked.component";
import { TypeBlockedCreateComponent } from "./views/type-blocked-create/type-blocked-create.component";
import { PostWrapComponent } from "./post-wrap/post-wrap.component";
import { SharedModule } from "../../../shared/shared.module";
import { MaterialModule } from "../../../core/material-module.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostBloackedDetailsComponent } from "./views/post-bloacked-details/post-bloacked-details.component";
import { PostBlockedCreateComponent } from "./views/post-blocked-create/post-blocked-create.component";
import { PostDetailsComponent } from "./views/post-details/post-details.component";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    PostIndexComponent,
    PostTypeComponent,
    PostTypeCreateComponent,
    PostBlockedComponent,
    TypeBlockedComponent,
    TypeBlockedCreateComponent,
    PostWrapComponent,
    PostBloackedDetailsComponent,
    PostBlockedCreateComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
})
export class PostsModule {}
