adSettings = {
    "dfpNetworkcode": "38496904",
    "siteName": "gldstemt",
    "expectedCmp": "cookiebot_notlive",
    "lazyLoading": false,
    "lazyLoadingOffset": 10,
    "prebid": true,
    "PREBID_TIMEOUT": 1400,
    "hbSettings": {
        "rubicon": {
            "active": true,
            "siteId": "212768",
            "accountId": "18908",
            "zoneId": "1047006"
        },
        "appnexus": {
            "active": true,
            "accountId": "14155233",
        },
        "criteo": {
            "active": true,
            "zoneIds": 
            {
                "300x250": "1269851",
                "320x50": "1269850",
                "728x90": "1269849"
            }
        },
        "improveDigital": {
            "active": true,
            "placementIds": {
                "300x250": "1189438",
                "320x50": "1191604",
                "728x90": "1191605"
            }
        },
        "ix": {
            "active": false,
            "siteId": "255033"
        }
    },
    "adslots": {
        "Home": {
            "bannerATF": {
                "viewports": [{
                    "minwidth": 1040,
                    "sizes": [320, 50]
                }]
            },
            "bannerATF_mobile": {
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 1023,
                    "sizes": [320, 50]
                }]
            },
            "rectangleATF": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [[300, 250], [320, 240]]
                },
                {
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "bannerBTF": {
                "viewports": [
                {
                    "minwidth": 768,
                    "sizes": [728, 90]
                }]
            }
        },
        "ArticleList": {
            "bannerATF": {
                "viewports": [{
                    "minwidth": 1040,
                    "sizes": [320, 50]
                }]
            },
            "bannerATF_mobile": {
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 1023,
                    "sizes": [320, 50]
                }]
            }
        },
        "Article": {
            "rectangleATF": {
                "viewports": [{
                    "maxwidth": 768,
                    "sizes": [[300, 250], [320, 240]]
                },
                {
                    "minwidth": 768,
                    "sizes": [300, 250]
                }]
            },
            "bannerATF": {
                "viewports": [{
                    "minwidth": 1040,
                    "sizes": [320, 50]
                }]
            },
            "bannerATF_mobile": {
                "viewports": [{
                    "minwidth": 0,
                    "maxwidth": 1023,
                    "sizes": [320, 50]
                }]
            }
        }
    }
};

!function () {
    var adManager = document.createElement('script');   
    adManager.async = true; 
    adManager.type = 'text/javascript'; 
    var useSSL = 'https:' == document.location.protocol;
    adManager.src = (useSSL ? 'https:' : 'http:') + '//crs-media-cdn.nl/admanager.min.js';
    var node = document.getElementsByTagName('script')[0]; 
    node.parentNode.insertBefore(adManager, node);
}()
