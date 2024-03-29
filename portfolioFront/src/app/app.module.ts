import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
