'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">hk documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-45a63399cae5bf9ff24e08909935bb79"' : 'data-target="#xs-components-links-module-AppModule-45a63399cae5bf9ff24e08909935bb79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-45a63399cae5bf9ff24e08909935bb79"' :
                                            'id="xs-components-links-module-AppModule-45a63399cae5bf9ff24e08909935bb79"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderDarkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderDarkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderLightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' : 'data-target="#xs-controllers-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' :
                                            'id="xs-controllers-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' : 'data-target="#xs-injectables-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' :
                                        'id="xs-injectables-links-module-AppModule-92d38be3ed8d36f3d52b988a55089a94-1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-df09b2ffa95bbac7164fe86de1d42fd9-2"' : 'data-target="#xs-components-links-module-AppModule-df09b2ffa95bbac7164fe86de1d42fd9-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-df09b2ffa95bbac7164fe86de1d42fd9-2"' :
                                            'id="xs-components-links-module-AppModule-df09b2ffa95bbac7164fe86de1d42fd9-2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigurationsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigurationsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDeleteDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmDeleteDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeaturesPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeaturesPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SiteConfigurationModule.html" data-type="entity-link">SiteConfigurationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' : 'data-target="#xs-controllers-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' :
                                            'id="xs-controllers-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' }>
                                            <li class="link">
                                                <a href="controllers/SiteConfigurationController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteConfigurationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' : 'data-target="#xs-injectables-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' :
                                        'id="xs-injectables-links-module-SiteConfigurationModule-7f4fa45defb858f3f069e78ada936149"' }>
                                        <li class="link">
                                            <a href="injectables/SiteConfigurationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SiteConfigurationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteFeatureModule.html" data-type="entity-link">SiteFeatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' : 'data-target="#xs-controllers-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' :
                                            'id="xs-controllers-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' }>
                                            <li class="link">
                                                <a href="controllers/SiteFeatureController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteFeatureController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' : 'data-target="#xs-injectables-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' :
                                        'id="xs-injectables-links-module-SiteFeatureModule-6f7b218898fc0a09d6521f01724d7e81"' }>
                                        <li class="link">
                                            <a href="injectables/SiteFeatureService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SiteFeatureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThemingModule.html" data-type="entity-link">ThemingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ThemingModule-6340a47e25ee543c8436320e412fa7aa"' : 'data-target="#xs-injectables-links-module-ThemingModule-6340a47e25ee543c8436320e412fa7aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ThemingModule-6340a47e25ee543c8436320e412fa7aa"' :
                                        'id="xs-injectables-links-module-ThemingModule-6340a47e25ee543c8436320e412fa7aa"' }>
                                        <li class="link">
                                            <a href="injectables/ThemingFacade.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThemingFacade</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/SiteConfiguration.html" data-type="entity-link">SiteConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="classes/SiteFeature.html" data-type="entity-link">SiteFeature</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ThemeLoaderService.html" data-type="entity-link">ThemeLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemingEffects.html" data-type="entity-link">ThemingEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemingService.html" data-type="entity-link">ThemingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-1.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteConfiguration.html" data-type="entity-link">SiteConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SiteFeature.html" data-type="entity-link">SiteFeature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Theme.html" data-type="entity-link">Theme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Theme-1.html" data-type="entity-link">Theme</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemingEntity.html" data-type="entity-link">ThemingEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ThemingPartialState.html" data-type="entity-link">ThemingPartialState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});