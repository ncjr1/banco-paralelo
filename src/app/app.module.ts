import { SignalrService } from './services/signalr/signalr.service';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './pages/shared/cabecalho/cabecalho.component';
import { RodapeComponent } from './pages/shared/rodape/rodape.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdicionarTransacaoComponent } from './pages/adicionar-transacao/adicionar-transacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListarTransacaoComponent } from './pages/listar-transacao/listar-transacao.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalExcluirTransacaoComponent } from './pages/shared/modal-excluir-transacao/modal-excluir-transacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './pages/shared/principal/principal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConfirmacaoEmailComponent } from './pages/confirmacao-email/confirmacao-email.component';
import { EmailConfirmadoComponent } from './pages/email-confirmado/email-confirmado.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    AdicionarTransacaoComponent,
    ListarTransacaoComponent,
    ModalExcluirTransacaoComponent,
    LoginComponent,
    HomeComponent,
    PrincipalComponent,
    CadastrarUsuarioComponent,
    ConfirmacaoEmailComponent,
    EmailConfirmadoComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatProgressBarModule,
    MatCheckboxModule
  ],
  entryComponents: [
    ModalExcluirTransacaoComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    SignalrService,
    {
      provide: APP_INITIALIZER,
      useFactory: (signalrService: SignalrService) => () => signalrService.initiateSignalrConnection(),
      deps: [SignalrService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;
