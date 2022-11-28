import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostWrapComponent} from './post-wrap/post-wrap.component';
import {PostIndexComponent} from './views/post-index/post-index.component';
import {PostBlockedComponent} from './views/post-blocked/post-blocked.component';
import {PostTypeComponent} from './views/post-type/post-type.component';
import {PostTypeCreateComponent} from './views/post-type-create/post-type-create.component';
import {TypeBlockedCreateComponent} from './views/type-blocked-create/type-blocked-create.component';
import { TypeBlockedComponent } from './views/type-blocked/type-blocked.component';

const routes: Routes = [{
        path: '',
        component: PostWrapComponent,
        children: [
            {
                path: 'posts',
                component: PostIndexComponent
            },
            {
                path: 'postBlocked',
                component: PostBlockedComponent
            },
            {
              path: 'postType',
              component: PostTypeComponent
          },
          {
            path: 'TypeBlocked',
            component: TypeBlockedComponent
        },
            {
                path: 'postTypeCreate',
                component: PostTypeCreateComponent
            }, {
                path: 'postTypeEdit/:id',
                component: PostTypeCreateComponent
            }, {
                path: 'typeBlockedCreate',
                component: TypeBlockedCreateComponent
            }, {
                path: 'typeBlockedEdit/:id',
                component: TypeBlockedCreateComponent
            },
          {
            path:''
          }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {}
