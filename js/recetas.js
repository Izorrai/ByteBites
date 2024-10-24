/*
const datos= {
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {
    "next": {
      "href": "https://api.edamam.com/api/recipes/v2?q=pasta&app_key=%20613d5b8342dd00062df156995b708937&_cont=CHcVQBtNNQphDmgVQntAEX4BYUtxBQIEQ2JECmESZFJwDQsVX3cVAzFFNQZ1BFdUFzcUAjEWNQN3UAFTQmBABmEUZwQnBhFqX3cWQT1OcV9xBE4%3D&type=public&app_id=0ad01d6d",
      "title": "Next page"
    }
  },
  "hits": [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_20022d91be0968092a8eab1aceee81be",
        "label": "Pasta alla Gricia Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b874915fba192f2b1821e7e5e8c83f4bdec293c7c16b5f809b6ce7f87d29046",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=817916d3c031a885696dfe3ad31ea0578ad4f21fecd8f38bd551880d6cb98a9e",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08126c2dab05a4e23ca299557850b4e970a8285ca8d5557cdac164a64bbd91a8",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b874915fba192f2b1821e7e5e8c83f4bdec293c7c16b5f809b6ce7f87d29046",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/bb5/bb5bad0cbcb94ad2ef0895d444f30291-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=615ffdfd511350915bb2e30d2ead8393980df7ed3a709513d6e7ceb3a860b5e9",
            "width": 600,
            "height": 600
          }
        },
        "source": "Serious Eats",
        "url": "http://www.seriouseats.com/recipes/2009/02/seriously-italian-pasta-alla-gricia-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/pasta-alla-gricia-recipe-20022d91be0968092a8eab1aceee81be/pasta",
        "yield": 4,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/2 to 2 ounces of guanciale",
          "2 tablespoons of grated Pecorino Romano",
          "4 ounces of dried pasta"
        ],
        "ingredients": [
          {
            "text": "1 1/2 to 2 ounces of guanciale",
            "quantity": 1.75,
            "measure": "ounce",
            "food": "guanciale",
            "weight": 49.611665468750004,
            "foodCategory": "cured meats",
            "foodId": "food_azm8diialtf7a1ban23mbams6u1z",
            "image": "https://www.edamam.com/food-img/d42/d426884a125fa39a70d5a5d7217864ec.jpg"
          },
          {
            "text": "2 tablespoons of grated Pecorino Romano",
            "quantity": 2,
            "measure": "<unit>",
            "food": "Pecorino Romano",
            "weight": 56.7,
            "foodCategory": "Cheese",
            "foodId": "food_bmxguz9abbdnfvbuklp2mbsrpt6b",
            "image": "https://www.edamam.com/food-img/71a/71a53d043eded9a8914415178a07f879.jpg"
          },
          {
            "text": "4 ounces of dried pasta",
            "quantity": 4,
            "measure": "ounce",
            "food": "pasta",
            "weight": 113.3980925,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 835.1097684671876,
        "totalCO2Emissions": 2142.7506071453126,
        "co2EmissionsClass": "D",
        "totalWeight": 219.70975796875,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 835.1097684671876,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 35.370539085656254,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 16.260882565287503,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.0729291482390625,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 12.52744554770625,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.8334281727000006,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 86.76658509750001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 83.1378461375,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.6287389600000006,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 3.615279898890625,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 39.56915019421876,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 91.71169920937501,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1190.1974932203125,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 627.8102993531251,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 89.7975055359375,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 401.3591938671875,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 2.0992895312812503,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6273460905937505,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 727.5977595031252,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 59.889283201562506,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.25996547994375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.31801430452968754,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 3.96581552434375,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.34118732149687503,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 24.380656650000002,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 24.380656650000002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.8830983273437502,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.48194666187500007,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.468478063265625,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 1.3607980925000003,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 51.91535893140626,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 41.755488423359374,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 54.4162139779327,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 81.30441282643751,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 28.922195032500003,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 14.514955840000002,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 79.13830038843751,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 30.570566403125007,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 49.59156221751302,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 62.78102993531251,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 21.3803584609375,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8.539557316323139,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.662719618229168,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 32.97587355085228,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 103.94253707187502,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 6.654364800173611,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 21.663789995312502,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 24.462638809975964,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 24.786347027148437,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 26.245178576682694,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 6.095164162500001,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 36.79576363932293,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.2129777458333337,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.1231870884375,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 1.133998410416667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 35.370539085656254,
            "hasRDI": true,
            "daily": 54.4162139779327,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 16.260882565287503,
                "hasRDI": true,
                "daily": 81.30441282643751,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.0729291482390625,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 12.52744554770625,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 3.8334281727000006,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 86.76658509750001,
            "hasRDI": true,
            "daily": 28.922195032500003,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 83.1378461375,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 3.6287389600000006,
                "hasRDI": true,
                "daily": 14.514955840000002,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 3.615279898890625,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 39.56915019421876,
            "hasRDI": true,
            "daily": 79.13830038843751,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 91.71169920937501,
            "hasRDI": true,
            "daily": 30.570566403125007,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1190.1974932203125,
            "hasRDI": true,
            "daily": 49.59156221751302,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 627.8102993531251,
            "hasRDI": true,
            "daily": 62.78102993531251,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 89.7975055359375,
            "hasRDI": true,
            "daily": 21.3803584609375,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 401.3591938671875,
            "hasRDI": true,
            "daily": 8.539557316323139,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 2.0992895312812503,
            "hasRDI": true,
            "daily": 11.662719618229168,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 3.6273460905937505,
            "hasRDI": true,
            "daily": 32.97587355085228,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 727.5977595031252,
            "hasRDI": true,
            "daily": 103.94253707187502,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 59.889283201562506,
            "hasRDI": true,
            "daily": 6.654364800173611,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.25996547994375,
            "hasRDI": true,
            "daily": 21.663789995312502,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.31801430452968754,
            "hasRDI": true,
            "daily": 24.462638809975964,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 3.96581552434375,
            "hasRDI": true,
            "daily": 24.786347027148437,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.34118732149687503,
            "hasRDI": true,
            "daily": 26.245178576682694,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 24.380656650000002,
            "hasRDI": true,
            "daily": 6.095164162500001,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 24.380656650000002,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.8830983273437502,
            "hasRDI": true,
            "daily": 36.79576363932293,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.48194666187500007,
            "hasRDI": true,
            "daily": 3.2129777458333337,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.468478063265625,
            "hasRDI": true,
            "daily": 3.1231870884375,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 1.3607980925000003,
            "hasRDI": true,
            "daily": 1.133998410416667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 51.91535893140626,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ],
        "tags": [
          "pasta",
          "Italian",
          "Seriously Italian"
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/20022d91be0968092a8eab1aceee81be?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_09b4dbdf0c7244c462a4d2622d88958e",
        "label": "Pasta Frittata Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a70a1eafe7546631dfaacbb97d27ec932296553499e246f2e9597485f251beb",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f0be1454b3a56ef34517e47b1e4e1959f438593efa1c333f80231119e3a41e80",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df4011f17d85c4c17dfdbc9e9cf4c8d36d48aa87677efd805a4d5caba0d824a0",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a70a1eafe7546631dfaacbb97d27ec932296553499e246f2e9597485f251beb",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=76324df63e24119299af245f5a4c8416242b731d3337cff3ad35c88ff01aeeca",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food Republic",
        "url": "http://www.foodrepublic.com/2012/01/21/pasta-frittata-recipe",
        "shareAs": "http://www.edamam.com/recipe/pasta-frittata-recipe-09b4dbdf0c7244c462a4d2622d88958e/pasta",
        "yield": 2,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups leftover pasta",
          "4 eggs beaten",
          "2 tablespoons butter",
          "1/2 cup whichever cheese the pasta called for"
        ],
        "ingredients": [
          {
            "text": "2 cups leftover pasta",
            "quantity": 2,
            "measure": "cup",
            "food": "pasta",
            "weight": 210,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "4 eggs beaten",
            "quantity": 4,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 tablespoons butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1/2 cup whichever cheese the pasta called for",
            "quantity": 0.5,
            "measure": "cup",
            "food": "pasta",
            "weight": 52.5,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 1423.463,
        "totalCO2Emissions": 1893.557,
        "co2EmissionsClass": "E",
        "totalWeight": 462.9,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course",
          "egg"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1423.463,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 43.35334999999999,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 20.452724999999997,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.06536,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 13.389674999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.620539999999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 197.34294000000003,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 188.94294000000002,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.4,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.66219,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 56.0384,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 700.9,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 263.11400000000003,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 158.261,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 160.33300000000003,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 829.551,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 6.42818,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 5.945609999999999,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 843.5010000000001,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 469.45599999999996,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.30647,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.953196,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.603428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.666002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.942,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.942,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.57908,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.44,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.75363,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 2.7664999999999997,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 161.65229999999997,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 71.17314999999999,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 66.69746153846152,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 102.26362499999999,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 65.78098,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 33.6,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 112.0768,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 233.63333333333333,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 10.963083333333334,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 15.8261,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 38.17452380952382,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 17.650021276595744,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 35.71211111111111,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 54.050999999999995,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 120.50014285714286,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 52.16177777777778,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 25.53916666666667,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 73.32276923076924,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 28.771425,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 51.23092307692308,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 32.2355,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 65.79500000000002,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 22.933333333333334,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 18.357533333333333,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 2.3054166666666664,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 43.35334999999999,
            "hasRDI": true,
            "daily": 66.69746153846152,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 20.452724999999997,
                "hasRDI": true,
                "daily": 102.26362499999999,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.06536,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 13.389674999999999,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 5.620539999999999,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 197.34294000000003,
            "hasRDI": true,
            "daily": 65.78098,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 188.94294000000002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 8.4,
                "hasRDI": true,
                "daily": 33.6,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 7.66219,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 56.0384,
            "hasRDI": true,
            "daily": 112.0768,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 700.9,
            "hasRDI": true,
            "daily": 233.63333333333333,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 263.11400000000003,
            "hasRDI": true,
            "daily": 10.963083333333334,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 158.261,
            "hasRDI": true,
            "daily": 15.8261,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 160.33300000000003,
            "hasRDI": true,
            "daily": 38.17452380952382,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 829.551,
            "hasRDI": true,
            "daily": 17.650021276595744,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 6.42818,
            "hasRDI": true,
            "daily": 35.71211111111111,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 5.945609999999999,
            "hasRDI": true,
            "daily": 54.050999999999995,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 843.5010000000001,
            "hasRDI": true,
            "daily": 120.50014285714286,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 469.45599999999996,
            "hasRDI": true,
            "daily": 52.16177777777778,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.30647,
            "hasRDI": true,
            "daily": 25.53916666666667,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.953196,
            "hasRDI": true,
            "daily": 73.32276923076924,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 4.603428,
            "hasRDI": true,
            "daily": 28.771425,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.666002,
            "hasRDI": true,
            "daily": 51.23092307692308,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 128.942,
            "hasRDI": true,
            "daily": 32.2355,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 128.942,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.57908,
            "hasRDI": true,
            "daily": 65.79500000000002,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.44,
            "hasRDI": true,
            "daily": 22.933333333333334,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.75363,
            "hasRDI": true,
            "daily": 18.357533333333333,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 2.7664999999999997,
            "hasRDI": true,
            "daily": 2.3054166666666664,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 161.65229999999997,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/09b4dbdf0c7244c462a4d2622d88958e?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f4ce5814f10c79bf856f7d40b2bade83",
        "label": "Pesto Pasta Salad",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f08/f087d49c12b18ba0ea58b7677f320fc4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9564ebbffab50d6fbaf9bcb75a208cde7c2ed3e8c24ce8969552a3412f94ac7c",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f08/f087d49c12b18ba0ea58b7677f320fc4-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d8efa31262d3ad73fd75607713d3fac8726a37dffae71ea1f2f7afee8734efe3",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f08/f087d49c12b18ba0ea58b7677f320fc4-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=07f489db03fa6273ad192eb49dff8a709fe66e5a9954c934c13c140b27b30c80",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f08/f087d49c12b18ba0ea58b7677f320fc4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9564ebbffab50d6fbaf9bcb75a208cde7c2ed3e8c24ce8969552a3412f94ac7c",
            "width": 300,
            "height": 300
          }
        },
        "source": "Martha Stewart",
        "url": "https://www.marthastewart.com/1541238/pasta-salad-tomatoes-mozzarella-and-chickpeas",
        "shareAs": "http://www.edamam.com/recipe/pesto-pasta-salad-f4ce5814f10c79bf856f7d40b2bade83/pasta",
        "yield": 4,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "Coarse salt",
          "1 pound orecchiette pasta",
          "1 cup store-bought basil pesto (8 ounces)"
        ],
        "ingredients": [
          {
            "text": "Coarse salt",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 4.08233133,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 pound orecchiette pasta",
            "quantity": 1,
            "measure": "pound",
            "food": "pasta",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1 cup store-bought basil pesto (8 ounces)",
            "quantity": 8,
            "measure": "ounce",
            "food": "basil pesto",
            "weight": 226.796185,
            "foodCategory": "condiments and sauces",
            "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
            "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
          }
        ],
        "calories": 2437.116128205618,
        "totalCO2Emissions": 839.3301337206941,
        "co2EmissionsClass": "C",
        "totalWeight": 680.388555,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "salad"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2437.116128205618,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 78.20085355104496,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.812469895798879,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.7756429527000002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.5582609668000003,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 356.6714025810113,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 338.33403912865174,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 18.337363452359554,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.110916279000001,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 70.30681735000002,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 17.83790219101124,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2295.1773922,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 473.6727513235956,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 240.40395610000002,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1011.5109851000001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.630312228539328,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.395652417000001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 857.2895793000001,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.408233133,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.27215542200000004,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.71107029,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.6441011654000001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 81.6466266,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 81.6466266,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.4989516070000001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.4535923700000001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 44.905644630000005,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 121.85580641028092,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 120.3090054631461,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 54.06234947899439,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 118.89046752700376,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 73.34945380943822,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 140.61363470000003,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 5.945967397003747,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 95.63239134166668,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 47.36727513235956,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 57.23903716666668,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 21.521510321276597,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 64.61284571410738,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 58.14229470000001,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 122.46993990000003,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 34.019427750000006,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 20.935032461538466,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 48.1941893125,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 49.546243492307696,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 20.41165665,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.326344046666667,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.3779936416666667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 78.20085355104496,
            "hasRDI": true,
            "daily": 120.3090054631461,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 10.812469895798879,
                "hasRDI": true,
                "daily": 54.06234947899439,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 0.7756429527000002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.5582609668000003,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 356.6714025810113,
            "hasRDI": true,
            "daily": 118.89046752700376,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 338.33403912865174,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 18.337363452359554,
                "hasRDI": true,
                "daily": 73.34945380943822,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 12.110916279000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 70.30681735000002,
            "hasRDI": true,
            "daily": 140.61363470000003,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 17.83790219101124,
            "hasRDI": true,
            "daily": 5.945967397003747,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2295.1773922,
            "hasRDI": true,
            "daily": 95.63239134166668,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 473.6727513235956,
            "hasRDI": true,
            "daily": 47.36727513235956,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 240.40395610000002,
            "hasRDI": true,
            "daily": 57.23903716666668,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1011.5109851000001,
            "hasRDI": true,
            "daily": 21.521510321276597,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 11.630312228539328,
            "hasRDI": true,
            "daily": 64.61284571410738,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 6.395652417000001,
            "hasRDI": true,
            "daily": 58.14229470000001,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 857.2895793000001,
            "hasRDI": true,
            "daily": 122.46993990000003,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.408233133,
            "hasRDI": true,
            "daily": 34.019427750000006,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.27215542200000004,
            "hasRDI": true,
            "daily": 20.935032461538466,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 7.71107029,
            "hasRDI": true,
            "daily": 48.1941893125,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.6441011654000001,
            "hasRDI": true,
            "daily": 49.546243492307696,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 81.6466266,
            "hasRDI": true,
            "daily": 20.41165665,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 81.6466266,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.4989516070000001,
            "hasRDI": true,
            "daily": 3.326344046666667,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 0.4535923700000001,
            "hasRDI": true,
            "daily": 0.3779936416666667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 44.905644630000005,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/f4ce5814f10c79bf856f7d40b2bade83?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_92e73545ca27fcc0622824ed509e7d2f",
        "label": "Guacamole Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7a5/7a52d677b9ecbbd45a2f69ff6e12494c.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2908ba98d50d24f6ed0d2f80114ef5dc9b846e134c0148e4b0808de82d24f730",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a5/7a52d677b9ecbbd45a2f69ff6e12494c-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e8a85e8b93361c954cd6544608691f6c9ec440a465e2744ab8991586ddb7c70d",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a5/7a52d677b9ecbbd45a2f69ff6e12494c-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc3fbdda6cf463183322909d825ce66b4fb41345a4af16aadc65a4b6fb94567b",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a5/7a52d677b9ecbbd45a2f69ff6e12494c.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2908ba98d50d24f6ed0d2f80114ef5dc9b846e134c0148e4b0808de82d24f730",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a5/7a52d677b9ecbbd45a2f69ff6e12494c-l.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df9905be7b01a7c50a29c111d36fba08f3113514df1c79ea1d2de8865dbd3bc3",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/29760-guacamole-pasta",
        "shareAs": "http://www.edamam.com/recipe/guacamole-pasta-92e73545ca27fcc0622824ed509e7d2f/pasta",
        "yield": 1,
        "dietLabels": [
          "Balanced",
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 avocado",
          "100 grams penne pasta",
          "1/4 scallion",
          "1 red tomato",
          "1/4 splash lemon juiced",
          "salt to taste"
        ],
        "ingredients": [
          {
            "text": "1/2 avocado",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "avocado",
            "weight": 100.5,
            "foodCategory": "fruit",
            "foodId": "food_b0yuze4b1g3afpanijno5abtiu28",
            "image": "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg"
          },
          {
            "text": "100 grams penne pasta",
            "quantity": 100,
            "measure": "gram",
            "food": "pasta",
            "weight": 100,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/4 scallion",
            "quantity": 0.25,
            "measure": "<unit>",
            "food": "scallion",
            "weight": 3.4722222222222228,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 red tomato",
            "quantity": 1,
            "measure": "<unit>",
            "food": "tomato",
            "weight": 123,
            "foodCategory": "vegetables",
            "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
            "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
          },
          {
            "text": "1/4 splash lemon juiced",
            "quantity": 0.25,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 21,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "salt to taste",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 2.087833333333333,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 561.1411111111111,
        "totalCO2Emissions": 530.6276627777778,
        "co2EmissionsClass": "D",
        "totalWeight": 350.00583533505153,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 561.1411111111111,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 16.59909722222222,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 2.4613911111111113,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 10.0613775,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.5164494444444445,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 90.26941111111111,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 78.18163333333334,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.087777777777779,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.174102777777778,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 16.38694166666667,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 809.2024433333333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 53.808067147079036,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 98.06978057557275,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1040.6610223823598,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 2.3689498121612256,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.290475279779496,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 275.4247222222222,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 60.64111111111111,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 38.68377777777778,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.2131547222222222,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.2209977777777778,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.218549166666667,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5176030555555556,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 122.38722222222225,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 122.38722222222225,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.9051472222222223,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 38.109500000000004,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 221.51312278178122,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 28.057055555555554,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 25.537072649572647,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.306955555555557,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 30.089803703703705,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 48.351111111111116,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 32.77388333333334,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 33.71676847222222,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 5.380806714707903,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 23.34994775608875,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 22.14172388047574,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 13.160832289784587,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 20.82250254344996,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 39.34638888888889,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 6.7379012345679,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 42.98197530864198,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 17.762893518518517,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 16.99982905982906,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.365932291666667,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 39.81561965811966,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 30.596805555555562,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.36764814814815,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 31.75791666666667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 16.59909722222222,
            "hasRDI": true,
            "daily": 25.537072649572647,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 2.4613911111111113,
                "hasRDI": true,
                "daily": 12.306955555555557,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 10.0613775,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.5164494444444445,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 90.26941111111111,
            "hasRDI": true,
            "daily": 30.089803703703705,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 78.18163333333334,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 12.087777777777779,
                "hasRDI": true,
                "daily": 48.351111111111116,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 7.174102777777778,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 16.38694166666667,
            "hasRDI": true,
            "daily": 32.77388333333334,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 809.2024433333333,
            "hasRDI": true,
            "daily": 33.71676847222222,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 53.808067147079036,
            "hasRDI": true,
            "daily": 5.380806714707903,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 98.06978057557275,
            "hasRDI": true,
            "daily": 23.34994775608875,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1040.6610223823598,
            "hasRDI": true,
            "daily": 22.14172388047574,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 2.3689498121612256,
            "hasRDI": true,
            "daily": 13.160832289784587,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 2.290475279779496,
            "hasRDI": true,
            "daily": 20.82250254344996,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 275.4247222222222,
            "hasRDI": true,
            "daily": 39.34638888888889,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 60.64111111111111,
            "hasRDI": true,
            "daily": 6.7379012345679,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 38.68377777777778,
            "hasRDI": true,
            "daily": 42.98197530864198,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.2131547222222222,
            "hasRDI": true,
            "daily": 17.762893518518517,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.2209977777777778,
            "hasRDI": true,
            "daily": 16.99982905982906,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 4.218549166666667,
            "hasRDI": true,
            "daily": 26.365932291666667,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.5176030555555556,
            "hasRDI": true,
            "daily": 39.81561965811966,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 122.38722222222225,
            "hasRDI": true,
            "daily": 30.596805555555562,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 122.38722222222225,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.9051472222222223,
            "hasRDI": true,
            "daily": 19.36764814814815,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 38.109500000000004,
            "hasRDI": true,
            "daily": 31.75791666666667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 221.51312278178122,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/92e73545ca27fcc0622824ed509e7d2f?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3ca6b690ff1ac73c9950b2add2c755a0",
        "label": "Mushroom Marsala Pasta with Artichokes recipes",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d95/d954acdff90c8c19993990597dc00651?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=635cecd4cec65fab40008ad6f3a5d97c69a429b181d69048b15630f67925df38",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d95/d954acdff90c8c19993990597dc00651-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2c4fe8db4d46e153953a2f6283142342eb8a55955dac5fbd10dccf25c3c6af97",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d95/d954acdff90c8c19993990597dc00651-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5df709527f4d75b500a08aa84a589ccb5f5134c1e883178a70bc5c83e138ba66",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d95/d954acdff90c8c19993990597dc00651?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=635cecd4cec65fab40008ad6f3a5d97c69a429b181d69048b15630f67925df38",
            "width": 300,
            "height": 300
          }
        },
        "source": "Smitten Kitchen",
        "url": "https://smittenkitchen.com/2009/12/mushroom-marsala-pasta-with-artichokes/",
        "shareAs": "http://www.edamam.com/recipe/mushroom-marsala-pasta-with-artichokes-recipes-3ca6b690ff1ac73c9950b2add2c755a0/pasta",
        "yield": 5,
        "dietLabels": [
          "Balanced",
          "High-Fiber"
        ],
        "healthLabels": [
          "Pescatarian",
          "Mediterranean",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "3 tablespoons olive oil",
          "1 small onion, finely chopped",
          "1 pound mushrooms, trimmed, cleaned and chopped into small bits (I used creminis)",
          "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
          "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
          "1 cup dry Marsala wine",
          "1 pound pasta, Giada recommends thimble-shaped pasta, ditalini, but I think I used snail-shaped or chiocciole",
          "1/2 pound frozen artichoke hearts, thawed",
          "3/4 cup grated Parmesan",
          "1/2 cup cream",
          "1/2 cup chopped fresh flat-leaf parsley",
          "1 teaspoon freshly ground black pepper"
        ],
        "ingredients": [
          {
            "text": "3 tablespoons olive oil",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 40.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 small onion, finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 70,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 pound mushrooms, trimmed, cleaned and chopped into small bits (I used creminis)",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "kosher salt",
            "weight": 4.854166666912875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "kosher salt",
            "weight": 4.854166666912875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 cup dry Marsala wine",
            "quantity": 1,
            "measure": "cup",
            "food": "wine",
            "weight": 236,
            "foodCategory": "wines",
            "foodId": "food_bw5p1agbubb4dubpm8r0yax8fjco",
            "image": "https://www.edamam.com/food-img/aeb/aebdd2e72bc13fa8ca762a408b6e58b6.jpg"
          },
          {
            "text": "1 pound pasta, Giada recommends thimble-shaped pasta, ditalini, but I think I used snail-shaped or chiocciole",
            "quantity": 1,
            "measure": "pound",
            "food": "ditalini",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 pound frozen artichoke hearts, thawed",
            "quantity": 0.5,
            "measure": "pound",
            "food": "artichoke hearts",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_aneqha3aarf9vmawbdwibaf8jnus",
            "image": "https://www.edamam.com/food-img/8f8/8f80887cee9e2455b7f8a162c2615758.jpg"
          },
          {
            "text": "3/4 cup grated Parmesan",
            "quantity": 0.75,
            "measure": "cup",
            "food": "Parmesan",
            "weight": 111.52968750000001,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup cream",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cream",
            "weight": 119,
            "foodCategory": "Dairy",
            "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/2 cup chopped fresh flat-leaf parsley",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parsley",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1 teaspoon freshly ground black pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 2.3,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          }
        ],
        "calories": 3329.4815960500005,
        "totalCO2Emissions": 7367.033783456,
        "co2EmissionsClass": "F",
        "totalWeight": 1749.5222106341662,
        "totalTime": 35,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3329.4815960500005,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 120.4550549975,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 51.1312574265,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4756,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 49.68261226195001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.256616239075,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 400.73326701450003,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 366.6734934845,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.05977353,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.03693009275,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 125.77187570750002,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 210.31018749999998,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4054.0339631564993,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1691.7075862522001,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 526.6631588813416,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4042.2698465507337,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.45202553934275,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 13.998682051884169,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2383.0656152500005,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 849.1454149749998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 81.85459341500001,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.078516784025,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.9460007939999997,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 27.737700242625007,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.767195820425,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 387.196813425,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 387.196813425,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.7101931980000002,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.3688331775,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.410308908000001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 560.1564324375,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1052.0527850212682,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 166.47407980250003,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 185.31546922692306,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 255.65628713249998,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 133.5777556715,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 136.23909412,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 251.54375141500003,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 70.10339583333334,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.91808179818747,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 169.17075862522,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 125.39599020984323,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 86.00574141597306,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 85.84458632968195,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 127.26074592621971,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 340.4379450357144,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 94.34949055277775,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 90.9495482388889,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 89.87639866875,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 226.61544569230767,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 173.36062651640628,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 135.9381400326923,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 96.79920335625,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 71.25804991666668,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 22.45888785,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 56.068726053333336,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 466.79702703125,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 120.4550549975,
            "hasRDI": true,
            "daily": 185.31546922692306,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 51.1312574265,
                "hasRDI": true,
                "daily": 255.65628713249998,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 1.4756,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 49.68261226195001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 10.256616239075,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 400.73326701450003,
            "hasRDI": true,
            "daily": 133.5777556715,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 366.6734934845,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 34.05977353,
                "hasRDI": true,
                "daily": 136.23909412,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 32.03693009275,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 125.77187570750002,
            "hasRDI": true,
            "daily": 251.54375141500003,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 210.31018749999998,
            "hasRDI": true,
            "daily": 70.10339583333334,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 4054.0339631564993,
            "hasRDI": true,
            "daily": 168.91808179818747,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1691.7075862522001,
            "hasRDI": true,
            "daily": 169.17075862522,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 526.6631588813416,
            "hasRDI": true,
            "daily": 125.39599020984323,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 4042.2698465507337,
            "hasRDI": true,
            "daily": 86.00574141597306,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 15.45202553934275,
            "hasRDI": true,
            "daily": 85.84458632968195,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 13.998682051884169,
            "hasRDI": true,
            "daily": 127.26074592621971,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 2383.0656152500005,
            "hasRDI": true,
            "daily": 340.4379450357144,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 849.1454149749998,
            "hasRDI": true,
            "daily": 94.34949055277775,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 81.85459341500001,
            "hasRDI": true,
            "daily": 90.9495482388889,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.078516784025,
            "hasRDI": true,
            "daily": 89.87639866875,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.9460007939999997,
            "hasRDI": true,
            "daily": 226.61544569230767,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 27.737700242625007,
            "hasRDI": true,
            "daily": 173.36062651640628,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.767195820425,
            "hasRDI": true,
            "daily": 135.9381400326923,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 387.196813425,
            "hasRDI": true,
            "daily": 96.79920335625,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 387.196813425,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.7101931980000002,
            "hasRDI": true,
            "daily": 71.25804991666668,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.3688331775,
            "hasRDI": true,
            "daily": 22.45888785,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 8.410308908000001,
            "hasRDI": true,
            "daily": 56.068726053333336,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 560.1564324375,
            "hasRDI": true,
            "daily": 466.79702703125,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1052.0527850212682,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ],
        "tags": [
          "eggplant",
          "main dishes",
          "vietnamese",
          "vegetarian recipe",
          "pesto sauce",
          "pasta healthy",
          "vegitarian pasta",
          "vegetarian mushroom",
          "mushroom recipe",
          "fresh parsley",
          "vegeterian",
          "artichoke cream",
          "artichoke pasta recipes",
          "wine pasta",
          "spicy vegetarian main dish",
          "mushrooms low cholesterol",
          "spicy artichoke pasta",
          "mushrooms onions",
          "mushroom pasta no chicken",
          "pasta mushroom pepper"
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/3ca6b690ff1ac73c9950b2add2c755a0?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_892326328a6242f79a48ad0afc0bb3b6",
        "label": "Grain-Free Mozzarella Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/518/518fef9aa117bcd10a97c8a97fdb33ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c43f320ceaf68394687fb40b84f0138fafc2c6f27f1103fa0662ef381c759eca",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/518/518fef9aa117bcd10a97c8a97fdb33ca-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3352144bc77778e6fbd8b4f77938ac90ba16b4fea416ec1656d8ee682dc474b9",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/518/518fef9aa117bcd10a97c8a97fdb33ca-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7a86623f3b4189fc669dbf8bd6bdac24438d9f0609291a039b9962509ac5c99",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/518/518fef9aa117bcd10a97c8a97fdb33ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c43f320ceaf68394687fb40b84f0138fafc2c6f27f1103fa0662ef381c759eca",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/518/518fef9aa117bcd10a97c8a97fdb33ca-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7be15b5d5ab2193784bc164b64d1ee8d12052b96c66eeec08d21c9f9bd9fcf4",
            "width": 600,
            "height": 600
          }
        },
        "source": "Honest Cooking",
        "url": "https://honestcooking.com/grain-free-mozzarella-pasta",
        "shareAs": "http://www.edamam.com/recipe/grain-free-mozzarella-pasta-892326328a6242f79a48ad0afc0bb3b6/pasta",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "80 gr Green Pea Pasta",
          "80 gr Red Lentil Pasta",
          "100 gr Rice Mozzarella",
          "2 tbsp Extra Virgin Olive Oil",
          "4 leaves of Sage",
          "1 1/2 tsp dried Italian herbs",
          "Himalayan Salt to taste"
        ],
        "ingredients": [
          {
            "text": "80 gr Green Pea Pasta",
            "quantity": 80,
            "measure": "gram",
            "food": "Pasta",
            "weight": 80,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "80 gr Red Lentil Pasta",
            "quantity": 80,
            "measure": "gram",
            "food": "Pasta",
            "weight": 80,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "100 gr Rice Mozzarella",
            "quantity": 100,
            "measure": "gram",
            "food": "Mozzarella",
            "weight": 100,
            "foodCategory": "Cheese",
            "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
            "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
          },
          {
            "text": "2 tbsp Extra Virgin Olive Oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Extra Virgin Olive Oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "4 leaves of Sage",
            "quantity": 4,
            "measure": "leaf",
            "food": "Sage",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
            "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
          },
          {
            "text": "1 1/2 tsp dried Italian herbs",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "herbs",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "Himalayan Salt to taste",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 1.7550000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 1148.02,
        "totalCO2Emissions": 2809.6883368125,
        "co2EmissionsClass": "D",
        "totalWeight": 292.9711286082474,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1148.02,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 52.13945,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 18.391349999999996,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 26.63545,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 4.59065,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 125.30650000000003,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 118.01950000000002,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.287000000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 4.3660499999999995,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 43.56065,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 79,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 680.2029000000001,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 633.3330708659794,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 125.22471128608248,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 488.1176902886598,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.656754724407217,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 5.457171128608247,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 663.0550000000001,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 193.64999999999998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.0460000000000003,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.21185499999999996,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.39842500000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 3.126900000000001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.38005,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 50.870000000000005,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 50.870000000000005,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.28,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.4,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.6654,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 112.76400000000001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 66.2761922572165,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 57.401,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 80.21453846153845,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.95674999999997,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 41.76883333333335,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 29.148000000000003,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 87.1213,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 26.333333333333332,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 28.341787500000002,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 63.33330708659794,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 29.815407449067255,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 10.385482772099145,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 31.42641513559565,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 49.61064662371134,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 94.72214285714286,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 21.516666666666662,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.2733333333333334,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 17.65458333333333,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 30.64807692307692,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 19.543125000000007,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 29.234615384615385,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.7175,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 94.99999999999999,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6666666666666665,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 31.102666666666668,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 93.97000000000001,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 52.13945,
            "hasRDI": true,
            "daily": 80.21453846153845,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 18.391349999999996,
                "hasRDI": true,
                "daily": 91.95674999999997,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 26.63545,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 4.59065,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 125.30650000000003,
            "hasRDI": true,
            "daily": 41.76883333333335,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 118.01950000000002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 7.287000000000001,
                "hasRDI": true,
                "daily": 29.148000000000003,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 4.3660499999999995,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 43.56065,
            "hasRDI": true,
            "daily": 87.1213,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 79,
            "hasRDI": true,
            "daily": 26.333333333333332,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 680.2029000000001,
            "hasRDI": true,
            "daily": 28.341787500000002,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 633.3330708659794,
            "hasRDI": true,
            "daily": 63.33330708659794,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 125.22471128608248,
            "hasRDI": true,
            "daily": 29.815407449067255,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 488.1176902886598,
            "hasRDI": true,
            "daily": 10.385482772099145,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.656754724407217,
            "hasRDI": true,
            "daily": 31.42641513559565,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 5.457171128608247,
            "hasRDI": true,
            "daily": 49.61064662371134,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 663.0550000000001,
            "hasRDI": true,
            "daily": 94.72214285714286,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 193.64999999999998,
            "hasRDI": true,
            "daily": 21.516666666666662,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 2.0460000000000003,
            "hasRDI": true,
            "daily": 2.2733333333333334,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.21185499999999996,
            "hasRDI": true,
            "daily": 17.65458333333333,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.39842500000000003,
            "hasRDI": true,
            "daily": 30.64807692307692,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 3.126900000000001,
            "hasRDI": true,
            "daily": 19.543125000000007,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.38005,
            "hasRDI": true,
            "daily": 29.234615384615385,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 50.870000000000005,
            "hasRDI": true,
            "daily": 12.7175,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 50.870000000000005,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 2.28,
            "hasRDI": true,
            "daily": 94.99999999999999,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.4,
            "hasRDI": true,
            "daily": 2.6666666666666665,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 4.6654,
            "hasRDI": true,
            "daily": 31.102666666666668,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 112.76400000000001,
            "hasRDI": true,
            "daily": 93.97000000000001,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 66.2761922572165,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/892326328a6242f79a48ad0afc0bb3b6?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1d90dc2d0cca4734b057cfca35251289",
        "label": "Smashed Tomato Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/822/822012b2e7d5fb6511bd3c5f0fd2be68.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d98295dbcfb8132b3ea3a51369d460cb1cb0d6dad0d2729e9b551fdf9ab7d4f7",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/822/822012b2e7d5fb6511bd3c5f0fd2be68-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=558061f3a7a0b59068ab36cfa2f37fde0fee577b1b7175a47f1b1fc454769fd1",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/822/822012b2e7d5fb6511bd3c5f0fd2be68-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f762dac193e09997480ff9ae875058ff9edb79fa6155364a8f4085420f52dc8b",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/822/822012b2e7d5fb6511bd3c5f0fd2be68.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d98295dbcfb8132b3ea3a51369d460cb1cb0d6dad0d2729e9b551fdf9ab7d4f7",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/822/822012b2e7d5fb6511bd3c5f0fd2be68-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=518666468b07efe43c681a2621c4893dbcdea0b50de5dbf31c683a54ac94782b",
            "width": 600,
            "height": 600
          }
        },
        "source": "Simply Recipes",
        "url": "https://www.simplyrecipes.com/smashed-tomato-pasta-recipe-5498706",
        "shareAs": "http://www.edamam.com/recipe/smashed-tomato-pasta-1d90dc2d0cca4734b057cfca35251289/pasta",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "2 1/4 pounds Roma (aka plum) tomatoes",
          "1 1/2 teaspoons kosher salt , plus more for salting the pasta water",
          "1/4 cup extra virgin olive oil",
          "1/4 cup homemade or store-bought basil pesto , plus more to taste",
          "1 pound dry fusilli pasta",
          "1/3 cup freshly grated Parmesan cheese , to pass around at the table"
        ],
        "ingredients": [
          {
            "text": "2 1/4 pounds Roma (aka plum) tomatoes",
            "quantity": 2.25,
            "measure": "pound",
            "food": "plum) tomatoes",
            "weight": 1020.5828325,
            "foodCategory": "vegetables",
            "foodId": "food_ab8jymba5i5xv3apgymg7a90bxb5",
            "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
          },
          {
            "text": "1 1/2 teaspoons kosher salt , plus more for salting the pasta water",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "kosher salt",
            "weight": 7.2812500003693135,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 cup extra virgin olive oil",
            "quantity": 0.25,
            "measure": "cup",
            "food": "extra virgin olive oil",
            "weight": 54,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1/4 cup homemade or store-bought basil pesto , plus more to taste",
            "quantity": 0.25,
            "measure": "cup",
            "food": "basil pesto",
            "weight": 68,
            "foodCategory": "condiments and sauces",
            "foodId": "food_amlzb2yam5vuysaaikhe3a68ojnn",
            "image": "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg"
          },
          {
            "text": "1 pound dry fusilli pasta",
            "quantity": 1,
            "measure": "pound",
            "food": "pasta",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/3 cup freshly grated Parmesan cheese , to pass around at the table",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2764.3594059207867,
        "totalCO2Emissions": 4398.990308199633,
        "co2EmissionsClass": "E",
        "totalWeight": 1652.1432017598831,
        "totalTime": 70,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2764.3594059207867,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 96.6758563789663,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 19.195557597325845,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 44.239593630775005,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 9.357390905275,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 385.47860093099155,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 357.5705836852613,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 27.908017245730342,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.00677039875,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 89.09374952600001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 39.055064606741574,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3827.144646659701,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 897.7604249296753,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 374.5423101675988,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3476.9474880657917,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.101356853903123,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.500183106509883,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1446.2365841000003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 531.25210215,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 139.8198480525,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.805180593525,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.630634410175,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.90766362755,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.5056749939,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 238.203863975,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 238.203863975,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.5948249999999999,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.24784375000000003,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 13.895150152500001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 114.4303048875,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1024.2398448410197,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 138.21797029603934,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 148.73208673687125,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 95.97778798662922,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 128.49286697699716,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 111.63206898292137,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 178.18749905200002,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 13.018354868913859,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 159.46436027748751,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 89.77604249296753,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 89.17674051609497,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 73.9776061290594,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 61.674204743906245,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 86.36530096827167,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 206.60522630000006,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 59.02801135000001,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 155.355386725,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 67.09838279375,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 48.510339244230764,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 86.9228976721875,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 115.82115337692306,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 59.55096599375,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 24.784374999999997,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.652291666666667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 92.63433435,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 95.35858740625001,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 96.6758563789663,
            "hasRDI": true,
            "daily": 148.73208673687125,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 19.195557597325845,
                "hasRDI": true,
                "daily": 95.97778798662922,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 44.239593630775005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 9.357390905275,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 385.47860093099155,
            "hasRDI": true,
            "daily": 128.49286697699716,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 357.5705836852613,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 27.908017245730342,
                "hasRDI": true,
                "daily": 111.63206898292137,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 39.00677039875,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 89.09374952600001,
            "hasRDI": true,
            "daily": 178.18749905200002,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 39.055064606741574,
            "hasRDI": true,
            "daily": 13.018354868913859,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3827.144646659701,
            "hasRDI": true,
            "daily": 159.46436027748751,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 897.7604249296753,
            "hasRDI": true,
            "daily": 89.77604249296753,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 374.5423101675988,
            "hasRDI": true,
            "daily": 89.17674051609497,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 3476.9474880657917,
            "hasRDI": true,
            "daily": 73.9776061290594,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 11.101356853903123,
            "hasRDI": true,
            "daily": 61.674204743906245,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 9.500183106509883,
            "hasRDI": true,
            "daily": 86.36530096827167,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1446.2365841000003,
            "hasRDI": true,
            "daily": 206.60522630000006,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 531.25210215,
            "hasRDI": true,
            "daily": 59.02801135000001,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 139.8198480525,
            "hasRDI": true,
            "daily": 155.355386725,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.805180593525,
            "hasRDI": true,
            "daily": 67.09838279375,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.630634410175,
            "hasRDI": true,
            "daily": 48.510339244230764,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 13.90766362755,
            "hasRDI": true,
            "daily": 86.9228976721875,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.5056749939,
            "hasRDI": true,
            "daily": 115.82115337692306,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 238.203863975,
            "hasRDI": true,
            "daily": 59.55096599375,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 238.203863975,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.5948249999999999,
            "hasRDI": true,
            "daily": 24.784374999999997,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.24784375000000003,
            "hasRDI": true,
            "daily": 1.652291666666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 13.895150152500001,
            "hasRDI": true,
            "daily": 92.63433435,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 114.4303048875,
            "hasRDI": true,
            "daily": 95.35858740625001,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1024.2398448410197,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/1d90dc2d0cca4734b057cfca35251289?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ddd1f89dfb324351741cee98e3d7798a",
        "label": "Pasta with Saffron",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c37/c371264af7046fa8cc07f72e1f6a06f6.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=22c2c419010fbed925c119e0325507a0c70cda8544d61235dff2e2361dbf646f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c37/c371264af7046fa8cc07f72e1f6a06f6-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34ca38d1453a6dbef6e5dce58ac5ca24e1658c8339effdc42353f6d940f2cf98",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c37/c371264af7046fa8cc07f72e1f6a06f6-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4036471ddee65119e391d76b07c8d262a5176fc343c654c6515cd5ebbc54e674",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c37/c371264af7046fa8cc07f72e1f6a06f6.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=22c2c419010fbed925c119e0325507a0c70cda8544d61235dff2e2361dbf646f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c37/c371264af7046fa8cc07f72e1f6a06f6-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c0fdf6b85ceb34f9585b15551cb39ee0c5704c937bdc6c8cf5f971b7d490bfb3",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/27070-pasta-with-saffron",
        "shareAs": "http://www.edamam.com/recipe/pasta-with-saffron-ddd1f89dfb324351741cee98e3d7798a/pasta",
        "yield": 4,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "12 ounces penne or bow-tie pasta (artisanal pasta)",
          "1 tablespoon unsalted butter",
          "3/4 cup fresh cream",
          "1/4 teaspoon teaspoon saffron threads or 1 package of saffron powder",
          "1/2 cup grated Parmesan cheese",
          "Salt and freshly ground pepper"
        ],
        "ingredients": [
          {
            "text": "12 ounces penne or bow-tie pasta (artisanal pasta)",
            "quantity": 12,
            "measure": "ounce",
            "food": "bow-tie pasta",
            "weight": 340.1942775,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1 tablespoon unsalted butter",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 14.2,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3/4 cup fresh cream",
            "quantity": 0.75,
            "measure": "cup",
            "food": "cream",
            "weight": 178.5,
            "foodCategory": "Dairy",
            "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 teaspoon teaspoon saffron threads or 1 package of saffron powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "saffron",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atxgj9uaraga9oa96ntw4bu7o2sy",
            "image": "https://www.edamam.com/food-img/b7c/b7c71604d7d5e7f54ac461079e6fe175.jpg"
          },
          {
            "text": "1/2 cup grated Parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "Salt and freshly ground pepper",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 3.6476844150000005,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Salt and freshly ground pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 1.8238422075000003,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          }
        ],
        "calories": 2269.0468634658255,
        "totalCO2Emissions": 6917.587226505749,
        "co2EmissionsClass": "F",
        "totalWeight": 610.9801996921673,
        "totalTime": 0,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2269.0468634658255,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.78032209621449,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 60.20908205535926,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.2134,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 25.755868408438424,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.604326951580851,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 263.22227493030005,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 251.84732597180255,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.374948958497502,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.397368236878004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 76.30325441458,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 282.79512500000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1418.0108341423972,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1079.172443450545,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 230.77620179967167,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1036.4149315835236,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.472345862297653,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.313172927503918,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1270.56154266285,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 985.3554061460252,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 1.6365999999999998,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.37435731808410005,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.7965288574735001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 6.1360154874154995,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.6260155986238249,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 74.966741875275,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 74.966741875275,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.2019775000000001,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.2277656250000004,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.528398539208,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 11.301298622800001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 161.59376915840684,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 113.45234317329127,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 153.50818784032998,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 301.0454102767963,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 87.74075831010002,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 45.499795833990014,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 152.60650882916,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 94.26504166666668,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 59.083784755933216,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 107.9172443450545,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 54.94671471420754,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 22.051381523053692,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 30.40192145720918,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 66.48339025003561,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 181.50879180897854,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 109.48393401622502,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 1.8184444444444443,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 31.196443173675004,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 61.271450574884625,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 38.350096796346875,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 48.15504604798653,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 18.74168546881875,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 50.082395833333344,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 21.518437500000005,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 16.85599026138667,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.417748852333334,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 99.78032209621449,
            "hasRDI": true,
            "daily": 153.50818784032998,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 60.20908205535926,
                "hasRDI": true,
                "daily": 301.0454102767963,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 2.2134,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 25.755868408438424,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 5.604326951580851,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 263.22227493030005,
            "hasRDI": true,
            "daily": 87.74075831010002,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 251.84732597180255,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 11.374948958497502,
                "hasRDI": true,
                "daily": 45.499795833990014,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 14.397368236878004,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 76.30325441458,
            "hasRDI": true,
            "daily": 152.60650882916,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 282.79512500000004,
            "hasRDI": true,
            "daily": 94.26504166666668,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1418.0108341423972,
            "hasRDI": true,
            "daily": 59.083784755933216,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1079.172443450545,
            "hasRDI": true,
            "daily": 107.9172443450545,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 230.77620179967167,
            "hasRDI": true,
            "daily": 54.94671471420754,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1036.4149315835236,
            "hasRDI": true,
            "daily": 22.051381523053692,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.472345862297653,
            "hasRDI": true,
            "daily": 30.40192145720918,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 7.313172927503918,
            "hasRDI": true,
            "daily": 66.48339025003561,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1270.56154266285,
            "hasRDI": true,
            "daily": 181.50879180897854,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 985.3554061460252,
            "hasRDI": true,
            "daily": 109.48393401622502,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 1.6365999999999998,
            "hasRDI": true,
            "daily": 1.8184444444444443,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.37435731808410005,
            "hasRDI": true,
            "daily": 31.196443173675004,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.7965288574735001,
            "hasRDI": true,
            "daily": 61.271450574884625,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 6.1360154874154995,
            "hasRDI": true,
            "daily": 38.350096796346875,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.6260155986238249,
            "hasRDI": true,
            "daily": 48.15504604798653,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 74.966741875275,
            "hasRDI": true,
            "daily": 18.74168546881875,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 74.966741875275,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.2019775000000001,
            "hasRDI": true,
            "daily": 50.082395833333344,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 3.2277656250000004,
            "hasRDI": true,
            "daily": 21.518437500000005,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.528398539208,
            "hasRDI": true,
            "daily": 16.85599026138667,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 11.301298622800001,
            "hasRDI": true,
            "daily": 9.417748852333334,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 161.59376915840684,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/ddd1f89dfb324351741cee98e3d7798a?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7b120e4db2ed4a36ba85798345f85070",
        "label": "Sausage, Feta, and Almond-Parsley Pesto Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/e2f/e2f487931082fdfbccd9b0ba1103d5b4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=120190c3d29bbe0d3a830c08fea89775264b761298cdf188ec249761fc62fe93",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e2f/e2f487931082fdfbccd9b0ba1103d5b4-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3bc4f63aaeb24c530c3cc1ceb332e1ba8063269620158b772f80fc10299b188c",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e2f/e2f487931082fdfbccd9b0ba1103d5b4-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bfd98ffd8fc70a478c3abc0510adb2305a47e94c25ad93bd51d36e627d08038",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/e2f/e2f487931082fdfbccd9b0ba1103d5b4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=120190c3d29bbe0d3a830c08fea89775264b761298cdf188ec249761fc62fe93",
            "width": 300,
            "height": 300
          }
        },
        "source": "Honest Cooking",
        "url": "https://honestcooking.com/sausage-feta-almond-parsley-pesto-pasta",
        "shareAs": "http://www.edamam.com/recipe/sausage-feta-and-almond-parsley-pesto-pasta-7b120e4db2ed4a36ba85798345f85070/pasta",
        "yield": 8,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "10-12 oz fusilli pasta, or pasta of your choice",
          "4 links chicken sausage (I used roasted garlic chicken sausage)",
          "½ cup crumbled feta cheese"
        ],
        "ingredients": [
          {
            "text": "10-12 oz fusilli pasta, or pasta of your choice",
            "quantity": 11,
            "measure": "ounce",
            "food": "pasta",
            "weight": 311.84475437500004,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "4 links chicken sausage (I used roasted garlic chicken sausage)",
            "quantity": 4,
            "measure": "link",
            "food": "chicken sausage",
            "weight": 180,
            "foodCategory": "Cured meats",
            "foodId": "food_a9y9paea6xn0psar7abaoavgqvds",
            "image": "https://www.edamam.com/food-img/acf/acf4680922611f686e985617cd05d36c.jpg"
          },
          {
            "text": "½ cup crumbled feta cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "feta cheese",
            "weight": 75,
            "foodCategory": "Cheese",
            "foodId": "food_biry7gubtkpad3a7qkz6uba5acn9",
            "image": "https://www.edamam.com/food-img/37e/37ef3e404b1c02bf4707cb82010732b8.jpg"
          }
        ],
        "calories": 1757.0940387312503,
        "totalCO2Emissions": 4057.1962643687502,
        "co2EmissionsClass": "D",
        "totalWeight": 566.8447543750001,
        "totalTime": 0,
        "cuisineType": [
          "mediterranean",
          "greek"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1757.0940387312503,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 49.9938557910625,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 17.78680996961875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2682,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.672254529981249,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 9.168054414675002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 240.790031518125,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 230.81099937812502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 9.979032140000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 13.690254941812501,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 79.08981806874999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 239.55,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2727.7106852625,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 568.43739841875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 215.52771981875003,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1105.51380225625,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 6.647481806875001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 8.5550110366875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1133.73658576875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 93.75,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.4987602789375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.282706852625,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 14.486610824375,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.3422195512125001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 96.33205578750001,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 87.33205578750001,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 5.4,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.2395,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.2000000000000002,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.8740292298125001,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 1.6618447543750001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 184.77263068312502,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 87.85470193656252,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.9136242939423,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 88.93404984809375,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 80.263343839375,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 39.916128560000004,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 158.17963613749998,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 79.85,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 113.65461188593751,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 56.843739841875,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 51.31612376636906,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 23.521570260771277,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 36.93045448263889,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 77.77282760624999,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 161.96236939553572,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.416666666666666,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 41.563356578125,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 98.66975789423076,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 90.54131765234375,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 103.24765778557692,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 24.083013946875003,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 93.31250000000001,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.000000000000002,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.826861532083334,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 1.3848706286458332,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 49.9938557910625,
            "hasRDI": true,
            "daily": 76.9136242939423,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 17.78680996961875,
                "hasRDI": true,
                "daily": 88.93404984809375,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.2682,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 14.672254529981249,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 9.168054414675002,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 240.790031518125,
            "hasRDI": true,
            "daily": 80.263343839375,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 230.81099937812502,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 9.979032140000001,
                "hasRDI": true,
                "daily": 39.916128560000004,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 13.690254941812501,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 79.08981806874999,
            "hasRDI": true,
            "daily": 158.17963613749998,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 239.55,
            "hasRDI": true,
            "daily": 79.85,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2727.7106852625,
            "hasRDI": true,
            "daily": 113.65461188593751,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 568.43739841875,
            "hasRDI": true,
            "daily": 56.843739841875,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 215.52771981875003,
            "hasRDI": true,
            "daily": 51.31612376636906,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1105.51380225625,
            "hasRDI": true,
            "daily": 23.521570260771277,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 6.647481806875001,
            "hasRDI": true,
            "daily": 36.93045448263889,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 8.5550110366875,
            "hasRDI": true,
            "daily": 77.77282760624999,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1133.73658576875,
            "hasRDI": true,
            "daily": 161.96236939553572,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 93.75,
            "hasRDI": true,
            "daily": 10.416666666666666,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.4987602789375,
            "hasRDI": true,
            "daily": 41.563356578125,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 1.282706852625,
            "hasRDI": true,
            "daily": 98.66975789423076,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 14.486610824375,
            "hasRDI": true,
            "daily": 90.54131765234375,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.3422195512125001,
            "hasRDI": true,
            "daily": 103.24765778557692,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 96.33205578750001,
            "hasRDI": true,
            "daily": 24.083013946875003,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 87.33205578750001,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 5.4,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 2.2395,
            "hasRDI": true,
            "daily": 93.31250000000001,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 1.2000000000000002,
            "hasRDI": true,
            "daily": 8.000000000000002,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.8740292298125001,
            "hasRDI": true,
            "daily": 5.826861532083334,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 1.6618447543750001,
            "hasRDI": true,
            "daily": 1.3848706286458332,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 184.77263068312502,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/7b120e4db2ed4a36ba85798345f85070?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f21e59098088407c86c61077de24c6be",
        "label": "Pasta with Dandelion Greens",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/de0/de0f127d3962e6afcbc0bf77a4b9df98.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=370746e76fcffab0bdb6fca27f440e764e9eeee8239f87912ae1d9e41abf83a9",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/de0/de0f127d3962e6afcbc0bf77a4b9df98-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a294ca81f7785304dbd27bd411457ce850f5adb766c6517814ffe22a665b74b",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/de0/de0f127d3962e6afcbc0bf77a4b9df98-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=894fc7b0d6ee0af900d35221dbc9891b6a4d71dc12a2e352e4c1a29789f6bbb6",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/de0/de0f127d3962e6afcbc0bf77a4b9df98.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=370746e76fcffab0bdb6fca27f440e764e9eeee8239f87912ae1d9e41abf83a9",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/de0/de0f127d3962e6afcbc0bf77a4b9df98-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cb04d38d659dc7e2aff6b41b321a0d4eea346e10f2916c912fefd1197d388ecf",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/30723-pasta-with-dandelion-greens",
        "shareAs": "http://www.edamam.com/recipe/pasta-with-dandelion-greens-f21e59098088407c86c61077de24c6be/pasta",
        "yield": 4,
        "dietLabels": [
          "Balanced",
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pounds dandelion greens",
          "1/2 cup olive oil",
          "3 cloves garlic, sliced thinly",
          "1/2 teaspoon red pepper flakes",
          "1 pound pasta (your choice)",
          "Salt for pasta water & greens"
        ],
        "ingredients": [
          {
            "text": "2 pounds dandelion greens",
            "quantity": 2,
            "measure": "pound",
            "food": "dandelion greens",
            "weight": 907.18474,
            "foodCategory": "vegetables",
            "foodId": "food_a25hrybbr7tatfaqjhzm7b5ia5dw",
            "image": "https://www.edamam.com/food-img/def/def986438306ee887bda2f2373b11e10.jpg"
          },
          {
            "text": "1/2 cup olive oil",
            "quantity": 0.5,
            "measure": "cup",
            "food": "olive oil",
            "weight": 108,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "3 cloves garlic, sliced thinly",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 teaspoon red pepper flakes",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper flakes",
            "weight": 0.38541666668621544,
            "foodCategory": "vegetables",
            "foodId": "food_bispmxiaijcuxcagex14mbhk2o48",
            "image": "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg"
          },
          {
            "text": "1 pound pasta (your choice)",
            "quantity": 1,
            "measure": "pound",
            "food": "pasta",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "Salt for pasta water & greens",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 8.868975160000119,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 3060.439575700064,
        "totalCO2Emissions": 1848.6233205162969,
        "co2EmissionsClass": "D",
        "totalWeight": 1485.1643841892283,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "salad"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3060.439575700064,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 121.26693067533446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 17.71380836040016,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 79.7454425663001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 16.708527104533935,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 425.54290272001367,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.9768663966747,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 46.56603632333895,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 18.800334183008037,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 84.07425024666875,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3437.437392512846,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1810.913744805419,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 569.6496477419092,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4657.971843168836,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 34.823613046492234,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.230442958522742,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1470.4143202000314,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 4613.585979200258,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 320.4436798333395,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.150196326500016,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.645360746000235,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 15.119394919401696,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.0358567378001586,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 327.05306890001003,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 327.05306890001003,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 47.277408746333954,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 7123.936119570021,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 826.7713430767132,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 153.0219787850032,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 186.56450873128378,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 88.56904180200081,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.84763424000457,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 186.2641452933558,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 168.14850049333754,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 143.2265580213686,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 181.09137448054187,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 135.63086850997837,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 99.10578389720928,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 193.46451692495685,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 93.0040268956613,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 210.0591886000045,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 512.6206643555843,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 356.048533148155,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 179.1830272083347,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 203.4892881538642,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 94.4962182462606,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 233.52744136924295,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 81.76326722500251,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 315.1827249755597,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 5936.6134329750175,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 121.26693067533446,
            "hasRDI": true,
            "daily": 186.56450873128378,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 17.71380836040016,
                "hasRDI": true,
                "daily": 88.56904180200081,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 79.7454425663001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 16.708527104533935,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 425.54290272001367,
            "hasRDI": true,
            "daily": 141.84763424000457,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 378.9768663966747,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 46.56603632333895,
                "hasRDI": true,
                "daily": 186.2641452933558,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 18.800334183008037,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 84.07425024666875,
            "hasRDI": true,
            "daily": 168.14850049333754,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3437.437392512846,
            "hasRDI": true,
            "daily": 143.2265580213686,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1810.913744805419,
            "hasRDI": true,
            "daily": 181.09137448054187,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 569.6496477419092,
            "hasRDI": true,
            "daily": 135.63086850997837,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 4657.971843168836,
            "hasRDI": true,
            "daily": 99.10578389720928,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 34.823613046492234,
            "hasRDI": true,
            "daily": 193.46451692495685,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 10.230442958522742,
            "hasRDI": true,
            "daily": 93.0040268956613,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1470.4143202000314,
            "hasRDI": true,
            "daily": 210.0591886000045,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 4613.585979200258,
            "hasRDI": true,
            "daily": 512.6206643555843,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 320.4436798333395,
            "hasRDI": true,
            "daily": 356.048533148155,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 2.150196326500016,
            "hasRDI": true,
            "daily": 179.1830272083347,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.645360746000235,
            "hasRDI": true,
            "daily": 203.4892881538642,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 15.119394919401696,
            "hasRDI": true,
            "daily": 94.4962182462606,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 3.0358567378001586,
            "hasRDI": true,
            "daily": 233.52744136924295,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 327.05306890001003,
            "hasRDI": true,
            "daily": 81.76326722500251,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 327.05306890001003,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 47.277408746333954,
            "hasRDI": true,
            "daily": 315.1827249755597,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 7123.936119570021,
            "hasRDI": true,
            "daily": 5936.6134329750175,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 826.7713430767132,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/f21e59098088407c86c61077de24c6be?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_912172ffa9d24b8082fbe24dafd07fe7",
        "label": "Breakfast Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/29d/29d2d525088b245283dd59252f0530b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b93c6083257ec68c4d72f27c3aef353f112d98c3c002900cd8b7e8fcc7db036",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/29d/29d2d525088b245283dd59252f0530b2-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9a33db49b2975e72f6d7e039e94fb1af1b3162d8e1f36af96d34cc9d0e37db79",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/29d/29d2d525088b245283dd59252f0530b2-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7e154e5bf6f66369132a33625dad8366bb0a0c55ad978f9368189cd8f656f792",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/29d/29d2d525088b245283dd59252f0530b2.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0b93c6083257ec68c4d72f27c3aef353f112d98c3c002900cd8b7e8fcc7db036",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/29d/29d2d525088b245283dd59252f0530b2-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7698871be2bfa1ef69c11e6de07f14d581bc5d32ea6d77fcbd614471341a12b7",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/86337-best-breakfast-pasta-recipe",
        "shareAs": "http://www.edamam.com/recipe/breakfast-pasta-912172ffa9d24b8082fbe24dafd07fe7/pasta",
        "yield": 1,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "Kosher salt",
          "1 heaping cup dry short cut pasta (like shells or elbows)",
          "2 tablespoons salted butter",
          "1 large egg",
          "1 teaspoon everything bagel spice"
        ],
        "ingredients": [
          {
            "text": "Kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "Kosher salt",
            "weight": 1.6944,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 heaping cup dry short cut pasta (like shells or elbows)",
            "quantity": 1,
            "measure": "cup",
            "food": "pasta",
            "weight": 105,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "2 tablespoons salted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "salted butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_axwam0ga2lqqlabfq1kqtbloozm3",
            "image": "https://www.edamam.com/food-img/515/515af390107678fce1533a31ee4cc35b.jpeg"
          },
          {
            "text": "1 large egg",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg",
            "weight": 50,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 teaspoon everything bagel spice",
            "quantity": 1,
            "measure": "<unit>",
            "food": "everything bagel",
            "weight": 99,
            "foodCategory": "quick breads and pastries",
            "foodId": "food_abgmon9a80fjy1b5vyx0kawkj6n1",
            "image": "https://www.edamam.com/food-img/755/7553666b2864e4003538607529dcccde.jpg"
          }
        ],
        "calories": 926.038,
        "totalCO2Emissions": 1234.87247392,
        "co2EmissionsClass": "F",
        "totalWeight": 282.4,
        "totalTime": 10,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "cereals"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 926.038,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 30.679699999999993,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 16.80985,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9713099999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 8.35965,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.9313,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 130.68804,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 125.74404,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 4.944000000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 11.351239999999999,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 30.6854,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 247.06,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 677.692,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 273.676,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.928,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 415.896,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.77998,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.97276,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 402.276,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 274.256,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.67824,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.641716,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 6.309227999999999,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.30425199999999997,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 204.622,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 67.012,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 81.17999999999999,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.49328,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.68478,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 2.441,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 86.5578,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 46.3019,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 47.19953846153845,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 84.04925,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 43.56268,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 19.776000000000003,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.3708,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 82.35333333333334,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 28.237166666666667,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 27.3676,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 21.649523809523807,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8.848851063829787,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 32.111000000000004,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 27.02509090909091,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 57.467999999999996,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 30.47288888888889,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 56.52,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 49.362769230769224,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 39.432674999999996,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 23.403999999999996,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 51.1555,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 20.553333333333335,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 6.666666666666667,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 57.89853333333333,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 2.0341666666666667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 30.679699999999993,
            "hasRDI": true,
            "daily": 47.19953846153845,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 16.80985,
                "hasRDI": true,
                "daily": 84.04925,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.9713099999999999,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 8.35965,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 2.9313,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 130.68804,
            "hasRDI": true,
            "daily": 43.56268,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 125.74404,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 4.944000000000001,
                "hasRDI": true,
                "daily": 19.776000000000003,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 11.351239999999999,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 30.6854,
            "hasRDI": true,
            "daily": 61.3708,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 247.06,
            "hasRDI": true,
            "daily": 82.35333333333334,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 677.692,
            "hasRDI": true,
            "daily": 28.237166666666667,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 273.676,
            "hasRDI": true,
            "daily": 27.3676,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 90.928,
            "hasRDI": true,
            "daily": 21.649523809523807,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 415.896,
            "hasRDI": true,
            "daily": 8.848851063829787,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 5.77998,
            "hasRDI": true,
            "daily": 32.111000000000004,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 2.97276,
            "hasRDI": true,
            "daily": 27.02509090909091,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 402.276,
            "hasRDI": true,
            "daily": 57.467999999999996,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 274.256,
            "hasRDI": true,
            "daily": 30.47288888888889,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.67824,
            "hasRDI": true,
            "daily": 56.52,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.641716,
            "hasRDI": true,
            "daily": 49.362769230769224,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 6.309227999999999,
            "hasRDI": true,
            "daily": 39.432674999999996,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.30425199999999997,
            "hasRDI": true,
            "daily": 23.403999999999996,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 204.622,
            "hasRDI": true,
            "daily": 51.1555,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 67.012,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 81.17999999999999,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.49328,
            "hasRDI": true,
            "daily": 20.553333333333335,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 1,
            "hasRDI": true,
            "daily": 6.666666666666667,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 8.68478,
            "hasRDI": true,
            "daily": 57.89853333333333,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 2.441,
            "hasRDI": true,
            "daily": 2.0341666666666667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 86.5578,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/912172ffa9d24b8082fbe24dafd07fe7?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_26e2eab39a77d8e899a1cc5347aec52e",
        "label": "Pasta con Ceci (pasta with chickpeas)",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e53c281e8e1b41c875a04ec8b3b3c4fee30c42969d2fb4a18bf797434e49f71e",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3fd14ee315613671cdcbccdb509990170d130a2143ac4de495f360e3f128fe0d",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc7984034181aec5cc74cf93183e770db38f20d846bf70fe3ab34a88480cabd2",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e53c281e8e1b41c875a04ec8b3b3c4fee30c42969d2fb4a18bf797434e49f71e",
            "width": 300,
            "height": 300
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/11912-pasta-con-ceci-pasta-with-chickpeas",
        "shareAs": "http://www.edamam.com/recipe/pasta-con-ceci-pasta-with-chickpeas-26e2eab39a77d8e899a1cc5347aec52e/pasta",
        "yield": 8,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pounds dry chickpeas",
          "1 pound pasta mista (see introduction)",
          "oilve oil, extra virgin",
          "1 bunch parsley, chopped",
          "salt and pepper",
          "baking soda"
        ],
        "ingredients": [
          {
            "text": "2 pounds dry chickpeas",
            "quantity": 2,
            "measure": "pound",
            "food": "chickpeas",
            "weight": 907.18474,
            "foodCategory": "plant-based protein",
            "foodId": "food_baux5rqbkto336asd7w3lbbi1koo",
            "image": "https://www.edamam.com/food-img/520/520c62055515f730b8947e0e445fd2be.jpg"
          },
          {
            "text": "1 pound pasta mista (see introduction)",
            "quantity": 1,
            "measure": "pound",
            "food": "pasta",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "oilve oil, extra virgin",
            "quantity": 0,
            "measure": null,
            "food": "oil",
            "weight": 19.322568695999998,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 bunch parsley, chopped",
            "quantity": 1,
            "measure": "bunch",
            "food": "parsley",
            "weight": 60,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 8.52466266,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "salt and pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 4.26233133,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "baking soda",
            "quantity": 0,
            "measure": null,
            "food": "baking soda",
            "weight": 6.535574706,
            "foodCategory": "condiments and sauces",
            "foodId": "food_asa4cjoa3lmt8ibwdg0cpblheo69",
            "image": "https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg"
          }
        ],
        "calories": 5315.095968810941,
        "totalCO2Emissions": 1410.7864056854123,
        "co2EmissionsClass": "C",
        "totalWeight": 1454.2581349893005,
        "totalTime": 0,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5315.095968810941,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 81.57872378035802,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 8.287362308612602,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.0763241463492,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 25.7344769777967,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 32.8709842390494,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 916.8857786412001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 788.6359146947101,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 128.24986394649,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 109.71696237951203,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 247.16516225832004,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3374.0333153425718,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 714.8383593536521,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 994.402092776873,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7914.455269009584,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 49.14132529199208,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 32.130033534084305,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3184.9296076014007,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.9663716591,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 116.0873896,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 4.7917076606364,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2618592671940005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 22.516305863162003,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.563942908570302,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 5226.5902247261,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 5226.5902247261,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 11.813644242632,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 1086.867433831448,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 167.75001632817663,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 265.754798440547,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.50572889285849,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 41.43681154306301,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 305.62859288040005,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 512.99945578596,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 494.3303245166401,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 140.58472147260716,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 71.4838359353652,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.76240304211262,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 168.39266529807625,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 273.0073627332893,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 292.09121394622093,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 454.98994394305726,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 31.2184857399,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 128.98598844444444,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 399.3089717197,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 173.98917439953848,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 140.7269116447625,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 427.9956083515616,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1306.647556181525,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 78.75762828421333,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 905.7228615262065,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 81.57872378035802,
            "hasRDI": true,
            "daily": 125.50572889285849,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 8.287362308612602,
                "hasRDI": true,
                "daily": 41.43681154306301,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.0763241463492,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 25.7344769777967,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 32.8709842390494,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 916.8857786412001,
            "hasRDI": true,
            "daily": 305.62859288040005,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 788.6359146947101,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 128.24986394649,
                "hasRDI": true,
                "daily": 512.99945578596,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 109.71696237951203,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 247.16516225832004,
            "hasRDI": true,
            "daily": 494.3303245166401,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 3374.0333153425718,
            "hasRDI": true,
            "daily": 140.58472147260716,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 714.8383593536521,
            "hasRDI": true,
            "daily": 71.4838359353652,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 994.402092776873,
            "hasRDI": true,
            "daily": 236.76240304211262,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 7914.455269009584,
            "hasRDI": true,
            "daily": 168.39266529807625,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 49.14132529199208,
            "hasRDI": true,
            "daily": 273.0073627332893,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 32.130033534084305,
            "hasRDI": true,
            "daily": 292.09121394622093,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 3184.9296076014007,
            "hasRDI": true,
            "daily": 454.98994394305726,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 280.9663716591,
            "hasRDI": true,
            "daily": 31.2184857399,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 116.0873896,
            "hasRDI": true,
            "daily": 128.98598844444444,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 4.7917076606364,
            "hasRDI": true,
            "daily": 399.3089717197,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 2.2618592671940005,
            "hasRDI": true,
            "daily": 173.98917439953848,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 22.516305863162003,
            "hasRDI": true,
            "daily": 140.7269116447625,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 5.563942908570302,
            "hasRDI": true,
            "daily": 427.9956083515616,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 5226.5902247261,
            "hasRDI": true,
            "daily": 1306.647556181525,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 5226.5902247261,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 11.813644242632,
            "hasRDI": true,
            "daily": 78.75762828421333,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 1086.867433831448,
            "hasRDI": true,
            "daily": 905.7228615262065,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 167.75001632817663,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/26e2eab39a77d8e899a1cc5347aec52e?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_3f05632c79ab88ffa3eedb2a7d53797b",
        "label": "Tutu Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/246/2463a294283802dd4f5372847e4a1ac5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffa282c7ee76fca911a24961347f4a0785e601936a729f9a534cd8c07f008303",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/246/2463a294283802dd4f5372847e4a1ac5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f6e6edf9057189c145320865e9b877155a29a45045684b27e2d233ee4569835b",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/246/2463a294283802dd4f5372847e4a1ac5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cb0e12e770499f7fd09393a9a029fa3fc3358eda56876fce51b129e508b1560f",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/246/2463a294283802dd4f5372847e4a1ac5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=376c4cac1043f156197a988e17bf2dfad870e879fee8fc4130358906a6f4503f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/246/2463a294283802dd4f5372847e4a1ac5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=82c1a36b883c91b9f9549bfa534e40e719547d386e47b3f3de92dd59484740ad",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/34623-tutu-pasta",
        "shareAs": "http://www.edamam.com/recipe/tutu-pasta-3f05632c79ab88ffa3eedb2a7d53797b/pasta",
        "yield": 4,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 medium onion, diced",
          "6 plum tomatoes, diced",
          "1/4 cup olive oil",
          "3/4 pound spaghetti or other long pasta",
          "1 egg, lightly beaten",
          "salt, to taste"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "6 plum tomatoes, diced",
            "quantity": 6,
            "measure": "<unit>",
            "food": "plum tomatoes",
            "weight": 372,
            "foodCategory": "vegetables",
            "foodId": "food_ab8jymba5i5xv3apgymg7a90bxb5",
            "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
          },
          {
            "text": "1/4 cup olive oil",
            "quantity": 0.25,
            "measure": "cup",
            "food": "olive oil",
            "weight": 54,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "3/4 pound spaghetti or other long pasta",
            "quantity": 0.75,
            "measure": "pound",
            "food": "pasta",
            "weight": 340.1942775,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1 egg, lightly beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg",
            "weight": 43,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "salt, to taste",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 5.5151656650000005,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 1911.9307695250002,
        "totalCO2Emissions": 1891.9444271014497,
        "co2EmissionsClass": "D",
        "totalWeight": 924.4314327881203,
        "totalTime": 0,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1911.9307695250002,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 64.08023359025,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.890598148675002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.01634,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.705152214525,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.7374557251,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 279.17952529250005,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 261.95930841250004,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.220216880000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.68988720925,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 54.126856075000006,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 159.96,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2137.5679084406997,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 159.8177155441489,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 237.43533862788118,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1861.1722112480497,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 6.730108219950798,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.1760764680381195,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 849.2871844750001,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 225.04000000000002,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 59.104,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.51161484975,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.5010065665000001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 8.152832717499999,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.98577587405,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 158.14496995000002,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 158.14496995000002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.3827,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.86,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 10.63251370525,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.8051942775,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 516.0057077830762,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 95.59653847625,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 98.58497475423077,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 49.45299074337501,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 93.05984176416668,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 68.88086752000001,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.25371215000001,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.32,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 89.06532951836249,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 15.981771554414891,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 56.532223482828854,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 39.599408749958506,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 37.38949011083777,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 56.146149709437445,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 121.32674063928573,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 25.00444444444445,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 65.6711111111111,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 42.63457081250001,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 38.53896665384616,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 50.955204484374995,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 75.82891338846154,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 39.536242487500004,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 15.945833333333333,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.733333333333333,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 70.88342470166667,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.33766189791667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 64.08023359025,
            "hasRDI": true,
            "daily": 98.58497475423077,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 9.890598148675002,
                "hasRDI": true,
                "daily": 49.45299074337501,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.01634,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 41.705152214525,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 8.7374557251,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 279.17952529250005,
            "hasRDI": true,
            "daily": 93.05984176416668,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 261.95930841250004,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 17.220216880000002,
                "hasRDI": true,
                "daily": 68.88086752000001,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 23.68988720925,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 54.126856075000006,
            "hasRDI": true,
            "daily": 108.25371215000001,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 159.96,
            "hasRDI": true,
            "daily": 53.32,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2137.5679084406997,
            "hasRDI": true,
            "daily": 89.06532951836249,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 159.8177155441489,
            "hasRDI": true,
            "daily": 15.981771554414891,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 237.43533862788118,
            "hasRDI": true,
            "daily": 56.532223482828854,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1861.1722112480497,
            "hasRDI": true,
            "daily": 39.599408749958506,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 6.730108219950798,
            "hasRDI": true,
            "daily": 37.38949011083777,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 6.1760764680381195,
            "hasRDI": true,
            "daily": 56.146149709437445,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 849.2871844750001,
            "hasRDI": true,
            "daily": 121.32674063928573,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 225.04000000000002,
            "hasRDI": true,
            "daily": 25.00444444444445,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 59.104,
            "hasRDI": true,
            "daily": 65.6711111111111,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.51161484975,
            "hasRDI": true,
            "daily": 42.63457081250001,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.5010065665000001,
            "hasRDI": true,
            "daily": 38.53896665384616,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 8.152832717499999,
            "hasRDI": true,
            "daily": 50.955204484374995,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.98577587405,
            "hasRDI": true,
            "daily": 75.82891338846154,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 158.14496995000002,
            "hasRDI": true,
            "daily": 39.536242487500004,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 158.14496995000002,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.3827,
            "hasRDI": true,
            "daily": 15.945833333333333,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.86,
            "hasRDI": true,
            "daily": 5.733333333333333,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 10.63251370525,
            "hasRDI": true,
            "daily": 70.88342470166667,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 62.8051942775,
            "hasRDI": true,
            "daily": 52.33766189791667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 516.0057077830762,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/3f05632c79ab88ffa3eedb2a7d53797b?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f9d89b6a21830d26fa11e64728541891",
        "label": "Pink Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/3a1/3a18fdadd64cbcb758eb420faf599f38.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ca23fd0049eb5c6199f5bf203d8f88eb5dd63fe4a863371108ec8b8d9ded1e2",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3a1/3a18fdadd64cbcb758eb420faf599f38-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=57132e0ef776fc7cfea4578e6f82781bc42af8c5257d94bc6ecf18804d20feac",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3a1/3a18fdadd64cbcb758eb420faf599f38-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d0369e738abc17e16f89cbab07c0e1f3d9733292b25f32afe6af0def74993a68",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3a1/3a18fdadd64cbcb758eb420faf599f38.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7ca23fd0049eb5c6199f5bf203d8f88eb5dd63fe4a863371108ec8b8d9ded1e2",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/3a1/3a18fdadd64cbcb758eb420faf599f38-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab314cdd6b6362782615435359fd27638e53a8e2048694c9c7c0d37b836f6a0c",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/75139-pink-pasta",
        "shareAs": "http://www.edamam.com/recipe/pink-pasta-f9d89b6a21830d26fa11e64728541891/pasta",
        "yield": 4,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500 grams Spaghetti or any pasta type",
          "300 milliliters Cooking cream",
          "2 tablespoons Tomato paste",
          "1 teaspoon Vegetable oil",
          "1 teaspoon Oregano",
          "1 dash Salt",
          "1 dash Pepper"
        ],
        "ingredients": [
          {
            "text": "500 grams Spaghetti or any pasta type",
            "quantity": 500,
            "measure": "gram",
            "food": "pasta",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "300 milliliters Cooking cream",
            "quantity": 300,
            "measure": "milliliter",
            "food": "cream",
            "weight": 302.2973629544764,
            "foodCategory": "Dairy",
            "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 tablespoons Tomato paste",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Tomato paste",
            "weight": 32.75,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "1 teaspoon Vegetable oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "Vegetable oil",
            "weight": 4.666666666982264,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 teaspoon Oregano",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "Oregano",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 dash Salt",
            "quantity": 1,
            "measure": "dash",
            "food": "Salt",
            "weight": 0.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 dash Pepper",
            "quantity": 1,
            "measure": "dash",
            "food": "Pepper",
            "weight": 0.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          }
        ],
        "calories": 2953.8203673813437,
        "totalCO2Emissions": 8096.23156242719,
        "co2EmissionsClass": "F",
        "totalWeight": 841.2140296214586,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2953.8203673813437,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 121.54599969354825,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 71.26683347955013,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.7842806339712616,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 31.753901529084583,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.430839098439247,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 389.0312701079072,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 371.2382201079072,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.79305,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.207572998270713,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 75.10044510790713,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 341.59602013855834,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 525.8152879977087,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 332.84525954995445,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 302.79081540681335,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1748.2294948067524,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 8.157277362954476,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 8.010328671090743,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1149.152970513596,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1268.2091617428982,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 9.009034177726859,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5319874725908953,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.9238865423544155,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 9.748400312290864,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8972350770340668,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.40889451817907,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.40889451817907,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.4836757807271623,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.836757807271623,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.940759072583317,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.291015614543248,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 248.10942842473287,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 147.69101836906717,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 186.99384568238193,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 356.33416739775066,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 129.67709003596906,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 71.1722,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.20089021581427,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 113.86534004618612,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 21.90897033323786,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 33.284525954995445,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 72.09305128733651,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 37.1963722299309,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 45.31820757196931,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 72.82116973718858,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 164.16471007337086,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 140.91212908254425,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 10.010037975252065,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 44.33228938257461,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 71.06819556572427,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 60.927501951817895,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 69.01808284877437,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 27.10222362954477,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 20.15315753029843,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 32.24505204847749,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 39.60506048388878,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 16.90917967878604,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 121.54599969354825,
            "hasRDI": true,
            "daily": 186.99384568238193,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 71.26683347955013,
                "hasRDI": true,
                "daily": 356.33416739775066,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 3.7842806339712616,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 31.753901529084583,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 8.430839098439247,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 389.0312701079072,
            "hasRDI": true,
            "daily": 129.67709003596906,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 371.2382201079072,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 17.79305,
                "hasRDI": true,
                "daily": 71.1722,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 26.207572998270713,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 75.10044510790713,
            "hasRDI": true,
            "daily": 150.20089021581427,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 341.59602013855834,
            "hasRDI": true,
            "daily": 113.86534004618612,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 525.8152879977087,
            "hasRDI": true,
            "daily": 21.90897033323786,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 332.84525954995445,
            "hasRDI": true,
            "daily": 33.284525954995445,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 302.79081540681335,
            "hasRDI": true,
            "daily": 72.09305128733651,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1748.2294948067524,
            "hasRDI": true,
            "daily": 37.1963722299309,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 8.157277362954476,
            "hasRDI": true,
            "daily": 45.31820757196931,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 8.010328671090743,
            "hasRDI": true,
            "daily": 72.82116973718858,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1149.152970513596,
            "hasRDI": true,
            "daily": 164.16471007337086,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 1268.2091617428982,
            "hasRDI": true,
            "daily": 140.91212908254425,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 9.009034177726859,
            "hasRDI": true,
            "daily": 10.010037975252065,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.5319874725908953,
            "hasRDI": true,
            "daily": 44.33228938257461,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.9238865423544155,
            "hasRDI": true,
            "daily": 71.06819556572427,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 9.748400312290864,
            "hasRDI": true,
            "daily": 60.927501951817895,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.8972350770340668,
            "hasRDI": true,
            "daily": 69.01808284877437,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 108.40889451817907,
            "hasRDI": true,
            "daily": 27.10222362954477,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 108.40889451817907,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.4836757807271623,
            "hasRDI": true,
            "daily": 20.15315753029843,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 4.836757807271623,
            "hasRDI": true,
            "daily": 32.24505204847749,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.940759072583317,
            "hasRDI": true,
            "daily": 39.60506048388878,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 20.291015614543248,
            "hasRDI": true,
            "daily": 16.90917967878604,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 248.10942842473287,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/f9d89b6a21830d26fa11e64728541891?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_359a3eb804be1a4bc5c4c18f713011ec",
        "label": "Commodity Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e53c281e8e1b41c875a04ec8b3b3c4fee30c42969d2fb4a18bf797434e49f71e",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dd039a074e615acdbea34d6a386248ef331be170a1db2dc95d682bb981297add",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fc7984034181aec5cc74cf93183e770db38f20d846bf70fe3ab34a88480cabd2",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e53c281e8e1b41c875a04ec8b3b3c4fee30c42969d2fb4a18bf797434e49f71e",
            "width": 300,
            "height": 300
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/78733-commodity-pasta",
        "shareAs": "http://www.edamam.com/recipe/commodity-pasta-359a3eb804be1a4bc5c4c18f713011ec/pasta",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 pound spaghetti noodles, or pasta",
          "4 -6 tablespoons butter",
          "1/2-3/4 cups grated parmesan cheese",
          "1 -2 teaspoons ground pepper",
          "4-6 quarts boiling water",
          "dash salt"
        ],
        "ingredients": [
          {
            "text": "1 pound spaghetti noodles, or pasta",
            "quantity": 1,
            "measure": "pound",
            "food": "spaghetti",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "4 -6 tablespoons butter",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1/2-3/4 cups grated parmesan cheese",
            "quantity": 0.625,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 92.94140625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1 -2 teaspoons ground pepper",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "ground pepper",
            "weight": 4.35,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "4-6 quarts boiling water",
            "quantity": 5,
            "measure": "quart",
            "food": "water",
            "weight": 4731.76473,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "dash salt",
            "quantity": 1,
            "measure": "dash",
            "food": "salt",
            "weight": 0.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 2567.146505200001,
        "totalCO2Emissions": 4634.7191321499995,
        "co2EmissionsClass": "E",
        "totalWeight": 5354.048506249999,
        "totalTime": 20,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2567.146505200001,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 87.8074063495,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 50.927243989900006,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 24.410983202699995,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.2676105683625005,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 344.65281367125004,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 329.03730783125,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.61550584,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.283591825875003,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 93.29593153750001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 215.85015625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1477.07472515,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1370.3224333500002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 337.47832215,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1171.94407885,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 7.096725341250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.540782561875002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1526.2159386750002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.2032109375,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.4527282814375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.61269089075,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 8.0423515009375,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.7434663450875001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 91.0220250375,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 91.0220250375,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.235996875,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.46470703125,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.39586270075,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 14.137596276250001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 4811.867581775,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 128.35732526000004,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 135.08831746076922,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 254.63621994950003,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 114.88427122375002,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 62.46202336,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 186.59186307500005,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 71.95005208333333,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 61.544780214583334,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 137.032243335,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 80.35198146428571,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 24.934980401063832,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 39.42625189583334,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 86.73438692613638,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 218.0308483821429,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 75.4670234375,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 37.72735678645833,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 47.13006851923077,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 50.264696880859375,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 57.189718852884624,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 22.755506259375,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 51.499869791666676,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.098046875,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 15.972418005,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 11.781330230208335,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 87.8074063495,
            "hasRDI": true,
            "daily": 135.08831746076922,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 50.927243989900006,
                "hasRDI": true,
                "daily": 254.63621994950003,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 24.410983202699995,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 5.2676105683625005,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 344.65281367125004,
            "hasRDI": true,
            "daily": 114.88427122375002,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 329.03730783125,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 15.61550584,
                "hasRDI": true,
                "daily": 62.46202336,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 12.283591825875003,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 93.29593153750001,
            "hasRDI": true,
            "daily": 186.59186307500005,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 215.85015625,
            "hasRDI": true,
            "daily": 71.95005208333333,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1477.07472515,
            "hasRDI": true,
            "daily": 61.544780214583334,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 1370.3224333500002,
            "hasRDI": true,
            "daily": 137.032243335,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 337.47832215,
            "hasRDI": true,
            "daily": 80.35198146428571,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1171.94407885,
            "hasRDI": true,
            "daily": 24.934980401063832,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 7.096725341250001,
            "hasRDI": true,
            "daily": 39.42625189583334,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 9.540782561875002,
            "hasRDI": true,
            "daily": 86.73438692613638,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1526.2159386750002,
            "hasRDI": true,
            "daily": 218.0308483821429,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 679.2032109375,
            "hasRDI": true,
            "daily": 75.4670234375,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.4527282814375,
            "hasRDI": true,
            "daily": 37.72735678645833,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.61269089075,
            "hasRDI": true,
            "daily": 47.13006851923077,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 8.0423515009375,
            "hasRDI": true,
            "daily": 50.264696880859375,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.7434663450875001,
            "hasRDI": true,
            "daily": 57.189718852884624,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 91.0220250375,
            "hasRDI": true,
            "daily": 22.755506259375,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 91.0220250375,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.235996875,
            "hasRDI": true,
            "daily": 51.499869791666676,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.46470703125,
            "hasRDI": true,
            "daily": 3.098046875,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 2.39586270075,
            "hasRDI": true,
            "daily": 15.972418005,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 14.137596276250001,
            "hasRDI": true,
            "daily": 11.781330230208335,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 4811.867581775,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/359a3eb804be1a4bc5c4c18f713011ec?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d6fffb6965aeb7f01ea6ab96a6e2b444",
        "label": "Tofu Pesto Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fbb/fbb8e29becef85d03180868233c044db.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f653d4a116fbf6ae64fab24d5c8f9a9fc5a0de0c2640b0aec32958f49421354",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fbb/fbb8e29becef85d03180868233c044db-s.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7538b49ac7643860ff6acbf5e75e6f6146162407278144caffe65453575167f",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fbb/fbb8e29becef85d03180868233c044db-m.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ca1278683b9f2f5c15f0e431a73cae73360001b939351396cb537543724324ec",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fbb/fbb8e29becef85d03180868233c044db.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f653d4a116fbf6ae64fab24d5c8f9a9fc5a0de0c2640b0aec32958f49421354",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fbb/fbb8e29becef85d03180868233c044db-l.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=72f1333ec694541213eedcbb1601ee8edd6defebbcf1a6b31aa1b73393cac91d",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/67017-tofu-pesto-pasta",
        "shareAs": "http://www.edamam.com/recipe/tofu-pesto-pasta-d6fffb6965aeb7f01ea6ab96a6e2b444/pasta",
        "yield": 2,
        "dietLabels": [
          "Balanced",
          "High-Fiber"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup Basil leaves",
          "1 cup Firm tofu",
          "3 tablespoons Parmesan",
          "2 tablespoons Walnuts, chopped",
          "3 cloves Garlic, minced",
          "2 teaspoons Lemon juice, fresh",
          "2 tablespoons Olive oil",
          "Salt and pepper to taste",
          "8 ounces Gluten-free pasta or pasta of choice"
        ],
        "ingredients": [
          {
            "text": "1 cup Basil leaves",
            "quantity": 1,
            "measure": "cup",
            "food": "Basil",
            "weight": 24,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "1 cup Firm tofu",
            "quantity": 1,
            "measure": "cup",
            "food": "Firm tofu",
            "weight": 252,
            "foodCategory": "plant-based protein",
            "foodId": "food_bu9fz3paqr6xcebft7onna22v8ve",
            "image": "https://www.edamam.com/food-img/c44/c44799e4beb77540acad305ac9f9ef7e.jpg"
          },
          {
            "text": "3 tablespoons Parmesan",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Parmesan",
            "weight": 27.882421875000002,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "2 tablespoons Walnuts, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Walnuts",
            "weight": 14.625,
            "foodCategory": "plant-based protein",
            "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
            "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
          },
          {
            "text": "3 cloves Garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "Garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons Lemon juice, fresh",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "Lemon juice",
            "weight": 10.166666667182332,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "2 tablespoons Olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "Salt and pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 3.548821641253094,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Salt and pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 1.774410820626547,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "8 ounces Gluten-free pasta or pasta of choice",
            "quantity": 8,
            "measure": "ounce",
            "food": "Gluten-free pasta",
            "weight": 226.796185,
            "foodCategory": "cooked grains",
            "foodId": "food_bubvqpia8mbzkdaiqx5wjan275zi",
            "image": "https://www.edamam.com/food-img/442/4429f32150f0a5d2151241867c423729.jpg"
          }
        ],
        "calories": 1666.7369923765527,
        "totalCO2Emissions": 1973.8745812375137,
        "co2EmissionsClass": "E",
        "totalWeight": 595.594469672696,
        "totalTime": 0,
        "cuisineType": [
          "asian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1666.7369923765527,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 73.69921773650368,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.970891914573585,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.960130330464462,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 24.403791409958718,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.5281480596116,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 174.67964931699154,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 19.848498742620063,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 0.8419393933275044,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 73.22516203993031,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 18.960046875,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1379.5786485920248,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2132.57966653478,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 202.81350598140116,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1132.033890876322,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.558956679914214,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 5.5024277089714335,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 753.7334102424645,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 247.19795420281918,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.756625000199563,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.3966064982176505,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4044060801022051,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 8.312326863303529,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.49438945606117707,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.28925270419296,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.28925270419296,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.33458906250000003,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.139412109375,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.28462020066029,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 119.78590991770254,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 221.8442983195074,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 83.33684961882763,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 113.38341190231337,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 59.854459572867924,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 64.84271601987054,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 79.39399497048025,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 146.45032407986062,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 6.320015625,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 57.48244369133436,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 213.25796665347798,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 48.288929995571706,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 24.085827465453658,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 64.21642599952341,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 50.02207008155849,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 107.67620146320921,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 27.466439355868797,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 13.062916666888404,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 116.38387485147088,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 31.10816000786193,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 51.952042895647054,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 38.02995815855208,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 27.07231317604824,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 13.941210937500003,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.9294140625,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 28.564134671068597,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 99.82159159808545,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 73.69921773650368,
            "hasRDI": true,
            "daily": 113.38341190231337,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 11.970891914573585,
                "hasRDI": true,
                "daily": 59.854459572867924,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 29.960130330464462,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 24.403791409958718,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 194.5281480596116,
            "hasRDI": true,
            "daily": 64.84271601987054,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 174.67964931699154,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 19.848498742620063,
                "hasRDI": true,
                "daily": 79.39399497048025,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 0.8419393933275044,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 73.22516203993031,
            "hasRDI": true,
            "daily": 146.45032407986062,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 18.960046875,
            "hasRDI": true,
            "daily": 6.320015625,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1379.5786485920248,
            "hasRDI": true,
            "daily": 57.48244369133436,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 2132.57966653478,
            "hasRDI": true,
            "daily": 213.25796665347798,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 202.81350598140116,
            "hasRDI": true,
            "daily": 48.288929995571706,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1132.033890876322,
            "hasRDI": true,
            "daily": 24.085827465453658,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 11.558956679914214,
            "hasRDI": true,
            "daily": 64.21642599952341,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 5.5024277089714335,
            "hasRDI": true,
            "daily": 50.02207008155849,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 753.7334102424645,
            "hasRDI": true,
            "daily": 107.67620146320921,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 247.19795420281918,
            "hasRDI": true,
            "daily": 27.466439355868797,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 11.756625000199563,
            "hasRDI": true,
            "daily": 13.062916666888404,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.3966064982176505,
            "hasRDI": true,
            "daily": 116.38387485147088,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.4044060801022051,
            "hasRDI": true,
            "daily": 31.10816000786193,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 8.312326863303529,
            "hasRDI": true,
            "daily": 51.952042895647054,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.49438945606117707,
            "hasRDI": true,
            "daily": 38.02995815855208,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 108.28925270419296,
            "hasRDI": true,
            "daily": 27.07231317604824,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 108.28925270419296,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0.33458906250000003,
            "hasRDI": true,
            "daily": 13.941210937500003,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.139412109375,
            "hasRDI": true,
            "daily": 0.9294140625,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 4.28462020066029,
            "hasRDI": true,
            "daily": 28.564134671068597,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 119.78590991770254,
            "hasRDI": true,
            "daily": 99.82159159808545,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 221.8442983195074,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/d6fffb6965aeb7f01ea6ab96a6e2b444?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b2c00994499f1db95fa5fe614468adf2",
        "label": "Pink walnut pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/dd0/dd08252bd41c51bc96b9d491fd296a17.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=269cf69c1ddb72c8093abd1a55110f22ce3c6d1aa0fc1c3477c5cee402051930",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd0/dd08252bd41c51bc96b9d491fd296a17-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ef239a651b586994342a1ba36fa764a775e0a563c9de1cf45a92c9a256c4fa0a",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd0/dd08252bd41c51bc96b9d491fd296a17-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7cfb3b4cc560d76b489a1dca2b01e36e1ce39a0df150ee7556a11ed5e4eb9249",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd0/dd08252bd41c51bc96b9d491fd296a17.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=269cf69c1ddb72c8093abd1a55110f22ce3c6d1aa0fc1c3477c5cee402051930",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd0/dd08252bd41c51bc96b9d491fd296a17-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0f5942e900158b4a0e31da0012c93abbda581b2d2c494c13ba334c6b94b38126",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/28296-pink-walnut-pasta",
        "shareAs": "http://www.edamam.com/recipe/pink-walnut-pasta-b2c00994499f1db95fa5fe614468adf2/pasta",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup walnuts",
          "1 piece rosted red bell pepper",
          "1 teaspoon white wine vinegar",
          "salt and pepper to taste",
          "1 package of pasta"
        ],
        "ingredients": [
          {
            "text": "1 cup walnuts",
            "quantity": 1,
            "measure": "cup",
            "food": "walnuts",
            "weight": 120,
            "foodCategory": "plant-based protein",
            "foodId": "food_acqkmojaw4fltga9jad8mb85u9z2",
            "image": "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg"
          },
          {
            "text": "1 piece rosted red bell pepper",
            "quantity": 1,
            "measure": "<unit>",
            "food": "red bell pepper",
            "weight": 119,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 teaspoon white wine vinegar",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "white wine vinegar",
            "weight": 5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_ai77igmb8f0rj6blsokr8bxx5n2n",
            "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
          },
          {
            "text": "salt and pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 4.182,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "salt and pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 2.091,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package of pasta",
            "quantity": 1,
            "measure": "package",
            "food": "pasta",
            "weight": 453,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 2502.51841,
        "totalCO2Emissions": 1026.35623784,
        "co2EmissionsClass": "C",
        "totalWeight": 703.1911647904124,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2502.51841,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 85.50546659999999,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 8.7100849,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 11.51441249,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 59.40142818,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 363.34694,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 337.782917,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.564023000000006,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 20.240482399999998,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 78.525564,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1625.7221386800002,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 231.60716954969894,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 447.63661164790415,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1818.718313183233,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 10.110766643808361,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.422283064790411,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1305.81378,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 188.59456999999998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 153.88,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.88341828,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.5567138,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.2338474,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.64003481,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 254.23546999999996,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 254.23546999999996,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 3.2402464,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 12.953240000000001,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 164.45857532958084,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 125.1259205,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 131.5468716923077,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 43.550424500000005,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 121.11564666666668,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 102.25609200000002,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 157.051128,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 67.73842244500001,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 23.160716954969896,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 106.58014563045337,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 38.69613432304751,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 56.170925798935336,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 94.748027861731,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 186.5448257142857,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 20.95495222222222,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 170.9777777777778,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 73.61819000000001,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 42.82413846153847,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 63.96154625,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 126.15652384615383,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 63.55886749999999,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 21.60164266666667,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 10.794366666666667,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 85.50546659999999,
            "hasRDI": true,
            "daily": 131.5468716923077,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 8.7100849,
                "hasRDI": true,
                "daily": 43.550424500000005,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 11.51441249,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 59.40142818,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 363.34694,
            "hasRDI": true,
            "daily": 121.11564666666668,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 337.782917,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 25.564023000000006,
                "hasRDI": true,
                "daily": 102.25609200000002,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 20.240482399999998,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 78.525564,
            "hasRDI": true,
            "daily": 157.051128,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1625.7221386800002,
            "hasRDI": true,
            "daily": 67.73842244500001,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 231.60716954969894,
            "hasRDI": true,
            "daily": 23.160716954969896,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 447.63661164790415,
            "hasRDI": true,
            "daily": 106.58014563045337,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1818.718313183233,
            "hasRDI": true,
            "daily": 38.69613432304751,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 10.110766643808361,
            "hasRDI": true,
            "daily": 56.170925798935336,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 10.422283064790411,
            "hasRDI": true,
            "daily": 94.748027861731,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1305.81378,
            "hasRDI": true,
            "daily": 186.5448257142857,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 188.59456999999998,
            "hasRDI": true,
            "daily": 20.95495222222222,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 153.88,
            "hasRDI": true,
            "daily": 170.9777777777778,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.88341828,
            "hasRDI": true,
            "daily": 73.61819000000001,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.5567138,
            "hasRDI": true,
            "daily": 42.82413846153847,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 10.2338474,
            "hasRDI": true,
            "daily": 63.96154625,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.64003481,
            "hasRDI": true,
            "daily": 126.15652384615383,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 254.23546999999996,
            "hasRDI": true,
            "daily": 63.55886749999999,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 254.23546999999996,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 3.2402464,
            "hasRDI": true,
            "daily": 21.60164266666667,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 12.953240000000001,
            "hasRDI": true,
            "daily": 10.794366666666667,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 164.45857532958084,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/b2c00994499f1db95fa5fe614468adf2?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_be7aa6e048ce31db4b3c861bf299135b",
        "label": "Tomato & Nectarine Pasta",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f2f/f2f83c72a4ecd67872dd72f6a3c88839.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=706aeb2e0f3b4ff29c4f4044e01de5b174e1bd9b724305fc975c430f5e04ed8f",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f2f/f2f83c72a4ecd67872dd72f6a3c88839-s.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7a01dc0fa0995500de004ecfc5b7db00a1ff2394754ef1e622415cd212496d2b",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f2f/f2f83c72a4ecd67872dd72f6a3c88839-m.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=232f70e0562dce5d786fdf94e97fdc8c9221fd21c8aab8b02d76aa044b2cc89d",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f2f/f2f83c72a4ecd67872dd72f6a3c88839.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=706aeb2e0f3b4ff29c4f4044e01de5b174e1bd9b724305fc975c430f5e04ed8f",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f2f/f2f83c72a4ecd67872dd72f6a3c88839-l.png?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7816f5e6e1d36392be4425ac3241d336016ca9c2beaba2392173f9f11f27cd0c",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/81699-tomato-nectarine-pasta",
        "shareAs": "http://www.edamam.com/recipe/tomato-nectarine-pasta-be7aa6e048ce31db4b3c861bf299135b/pasta",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 pound Pasta",
          "3 cups Cherry Tomatoes, Sliced in Half",
          "2 cups Nectarines, 1/2-3/4\" Cubes",
          "2 Garlic Cloves",
          "1/8 teaspoon Salt",
          "1 tablespoon Lemon Juice",
          "1 tablespoon Balsamic Vinegar",
          "1/2 cup Fresh Basil, Cut into Chiffonades",
          "3/4 cup Pasta Water, Reserved"
        ],
        "ingredients": [
          {
            "text": "1 pound Pasta",
            "quantity": 1,
            "measure": "pound",
            "food": "Pasta",
            "weight": 453.59237,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "3 cups Cherry Tomatoes, Sliced in Half",
            "quantity": 3,
            "measure": "cup",
            "food": "Cherry Tomatoes",
            "weight": 525,
            "foodCategory": "vegetables",
            "foodId": "food_a30b0hpbvavginafe0tocbf6ymje",
            "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
          },
          {
            "text": "2 cups Nectarines, 1/2-3/4\" Cubes",
            "quantity": 2,
            "measure": "cup",
            "food": "Nectarines",
            "weight": 286,
            "foodCategory": "fruit",
            "foodId": "food_anhgglnb5bls9sal69fgvayy4pz7",
            "image": "https://www.edamam.com/food-img/0c3/0c3d5dcefa8b5314e8af3df4dc89f4c6.jpg"
          },
          {
            "text": "2 Garlic Cloves",
            "quantity": 2,
            "measure": "clove",
            "food": "Garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/8 teaspoon Salt",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "Salt",
            "weight": 0.75,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tablespoon Lemon Juice",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Lemon Juice",
            "weight": 15.25,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1 tablespoon Balsamic Vinegar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Balsamic Vinegar",
            "weight": 16,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b1ic8tzapja8jubas1f8lbhpbn6x",
            "image": "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg"
          },
          {
            "text": "1/2 cup Fresh Basil, Cut into Chiffonades",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Fresh Basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "3/4 cup Pasta Water, Reserved",
            "quantity": 0.75,
            "measure": "cup",
            "food": "Water",
            "weight": 177.441177375,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1932.3026927,
        "totalCO2Emissions": 2154.3243138280004,
        "co2EmissionsClass": "D",
        "totalWeight": 1492.0335473750001,
        "totalTime": 20,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1932.3026927,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 8.957844787,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.4913108649000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 1.2022079527,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.3820134668,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 395.64825039000004,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 369.60754455000006,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 26.040705840000008,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 51.364116279,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 67.50998310000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 356.895689295,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.75263302125,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 337.69086787375005,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2923.7684851000004,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 8.727275810000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.980071534737502,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1077.8095793000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 300.8,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 97.30275,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.719463133,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.46713292200000006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 14.19688779,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2356161654,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 186.08662660000002,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.08662660000002,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.659826607,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 98.12259237,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1009.6996308276249,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 96.615134635,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 13.781299672307695,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 7.456554324500002,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 131.88275013,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 104.16282336000003,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 135.01996620000003,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 14.870653720625002,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 20.775263302125,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 80.4025875889881,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 62.207840108510645,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 48.484865611111125,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 72.54610486125002,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 153.97279704285717,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 33.422222222222224,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 108.11416666666666,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 59.95526108333333,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 35.933301692307694,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 88.7305486875,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 95.04739733846154,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 46.521656650000004,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 37.73217738,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 81.768826975,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 8.957844787,
            "hasRDI": true,
            "daily": 13.781299672307695,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 1.4913108649000002,
                "hasRDI": true,
                "daily": 7.456554324500002,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 1.2022079527,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 3.3820134668,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 395.64825039000004,
            "hasRDI": true,
            "daily": 131.88275013,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 369.60754455000006,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 26.040705840000008,
                "hasRDI": true,
                "daily": 104.16282336000003,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 51.364116279,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 67.50998310000001,
            "hasRDI": true,
            "daily": 135.01996620000003,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 356.895689295,
            "hasRDI": true,
            "daily": 14.870653720625002,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 207.75263302125,
            "hasRDI": true,
            "daily": 20.775263302125,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 337.69086787375005,
            "hasRDI": true,
            "daily": 80.4025875889881,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2923.7684851000004,
            "hasRDI": true,
            "daily": 62.207840108510645,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 8.727275810000002,
            "hasRDI": true,
            "daily": 48.484865611111125,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 7.980071534737502,
            "hasRDI": true,
            "daily": 72.54610486125002,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1077.8095793000002,
            "hasRDI": true,
            "daily": 153.97279704285717,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 300.8,
            "hasRDI": true,
            "daily": 33.422222222222224,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 97.30275,
            "hasRDI": true,
            "daily": 108.11416666666666,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.719463133,
            "hasRDI": true,
            "daily": 59.95526108333333,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.46713292200000006,
            "hasRDI": true,
            "daily": 35.933301692307694,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 14.19688779,
            "hasRDI": true,
            "daily": 88.7305486875,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.2356161654,
            "hasRDI": true,
            "daily": 95.04739733846154,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 186.08662660000002,
            "hasRDI": true,
            "daily": 46.521656650000004,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 186.08662660000002,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 5.659826607,
            "hasRDI": true,
            "daily": 37.73217738,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 98.12259237,
            "hasRDI": true,
            "daily": 81.768826975,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1009.6996308276249,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/be7aa6e048ce31db4b3c861bf299135b?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_be91efbfcca223857bc28e34d36236b2",
        "label": "Grain Free Pasta Tricolore",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/34b/34babe6e5a18853b1e4742ab8d675984.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=721c2b205597f3ff24f1d29f5fdcadcf3955155eef74e2ef51f99df77c7ca7c5",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/34b/34babe6e5a18853b1e4742ab8d675984-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29411c6bb1ee3503fa3b030593536ed2aaac2f262812470e63d701f33bf8f6aa",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/34b/34babe6e5a18853b1e4742ab8d675984-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5ae838e91159eacf3e3563e4e5804d2bbcd9c6f3c1e4a2650ad0a3890691fd43",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/34b/34babe6e5a18853b1e4742ab8d675984.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=721c2b205597f3ff24f1d29f5fdcadcf3955155eef74e2ef51f99df77c7ca7c5",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/34b/34babe6e5a18853b1e4742ab8d675984-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e65d514b87dcdbbea203a4af83351d75413d089df7333bbb7ed48e45e905ea4",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/52697-grain-free-pasta-tricolore",
        "shareAs": "http://www.edamam.com/recipe/grain-free-pasta-tricolore-be91efbfcca223857bc28e34d36236b2/pasta",
        "yield": 2,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "80 grams Green Pea Pasta",
          "80 grams Red Lentil Pasta",
          "100 grams Rice Mozzarella",
          "2 tablespoons Extra Virgin Olive Oil",
          "4 pieces leaves of Sage",
          "1 1/2 teaspoons dried Italian herbs",
          "1 piece Himalayan Salt, to taste"
        ],
        "ingredients": [
          {
            "text": "80 grams Green Pea Pasta",
            "quantity": 80,
            "measure": "gram",
            "food": "Pasta",
            "weight": 80,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "80 grams Red Lentil Pasta",
            "quantity": 80,
            "measure": "gram",
            "food": "Pasta",
            "weight": 80,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "100 grams Rice Mozzarella",
            "quantity": 100,
            "measure": "gram",
            "food": "Mozzarella",
            "weight": 100,
            "foodCategory": "Cheese",
            "foodId": "food_am27cpgbcz7639bm3uvx0ai1xhrs",
            "image": "https://www.edamam.com/food-img/03e/03ec3a4d46bec5634dc8a352804e4e68.jpg"
          },
          {
            "text": "2 tablespoons Extra Virgin Olive Oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "Extra Virgin Olive Oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "4 pieces leaves of Sage",
            "quantity": 1,
            "measure": "leaf",
            "food": "Sage",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
            "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
          },
          {
            "text": "1 1/2 teaspoons dried Italian herbs",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "herbs",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 piece Himalayan Salt, to taste",
            "quantity": 0,
            "measure": null,
            "food": "Salt",
            "weight": 1.737,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          }
        ],
        "calories": 1138.5700000000002,
        "totalCO2Emissions": 2808.0887968125003,
        "co2EmissionsClass": "F",
        "totalWeight": 289.95399860824745,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "cereals"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1138.5700000000002,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.75545,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 18.180449999999997,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 26.57935,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 4.53785,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 123.48550000000002,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 117.40750000000001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 6.078,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 4.31475,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 43.242650000000005,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 79,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 673.22646,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 583.8289596659794,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 112.38453998608249,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 456.0163198886598,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.813698195407217,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 5.316153998608247,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 660.325,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 184.79999999999998,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 1.074,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.189235,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.388345,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 2.9553000000000003,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.29934999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 42.65,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 42.65,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.28,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.4,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.441,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 61.464000000000006,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 66.0373579972165,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 56.92850000000001,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 79.62376923076923,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 90.90224999999998,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 41.161833333333334,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 24.312,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 86.48530000000001,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 26.333333333333332,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 28.0511025,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 58.382895966597935,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 26.75822380621012,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 9.70247489124808,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 26.742767752262317,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 48.32867271462043,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 94.33214285714286,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 20.533333333333335,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 1.1933333333333334,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 15.769583333333332,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 29.872692307692304,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.470625000000002,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 23.026923076923072,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 10.6625,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 94.99999999999999,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6666666666666665,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 29.606666666666666,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 51.220000000000006,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 51.75545,
            "hasRDI": true,
            "daily": 79.62376923076923,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 18.180449999999997,
                "hasRDI": true,
                "daily": 90.90224999999998,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 26.57935,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 4.53785,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 123.48550000000002,
            "hasRDI": true,
            "daily": 41.161833333333334,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 117.40750000000001,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 6.078,
                "hasRDI": true,
                "daily": 24.312,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 4.31475,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 43.242650000000005,
            "hasRDI": true,
            "daily": 86.48530000000001,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 79,
            "hasRDI": true,
            "daily": 26.333333333333332,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 673.22646,
            "hasRDI": true,
            "daily": 28.0511025,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 583.8289596659794,
            "hasRDI": true,
            "daily": 58.382895966597935,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 112.38453998608249,
            "hasRDI": true,
            "daily": 26.75822380621012,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 456.0163198886598,
            "hasRDI": true,
            "daily": 9.70247489124808,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 4.813698195407217,
            "hasRDI": true,
            "daily": 26.742767752262317,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 5.316153998608247,
            "hasRDI": true,
            "daily": 48.32867271462043,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 660.325,
            "hasRDI": true,
            "daily": 94.33214285714286,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 184.79999999999998,
            "hasRDI": true,
            "daily": 20.533333333333335,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 1.074,
            "hasRDI": true,
            "daily": 1.1933333333333334,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 0.189235,
            "hasRDI": true,
            "daily": 15.769583333333332,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.388345,
            "hasRDI": true,
            "daily": 29.872692307692304,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 2.9553000000000003,
            "hasRDI": true,
            "daily": 18.470625000000002,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 0.29934999999999995,
            "hasRDI": true,
            "daily": 23.026923076923072,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 42.65,
            "hasRDI": true,
            "daily": 10.6625,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 42.65,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 2.28,
            "hasRDI": true,
            "daily": 94.99999999999999,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.4,
            "hasRDI": true,
            "daily": 2.6666666666666665,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 4.441,
            "hasRDI": true,
            "daily": 29.606666666666666,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 61.464000000000006,
            "hasRDI": true,
            "daily": 51.220000000000006,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 66.0373579972165,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/be91efbfcca223857bc28e34d36236b2?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e0cffc60dcdbd1c5ff4d2d1505374ad2",
        "label": "Cabbage with pasta ( Krpice sa zeljem )",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8d1/8d13c2a6fa5172659f28d26c708ea191.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=15c325d0d622c264a1521b806ad70b2e645d8a305a1485a51a5ae12259b428c1",
        "images": {
          "THUMBNAIL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d1/8d13c2a6fa5172659f28d26c708ea191-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3cac27b8b939787501fa219e3c2f45457bc348800a5a642b28eca7d5146a85cb",
            "width": 100,
            "height": 100
          },
          "SMALL": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d1/8d13c2a6fa5172659f28d26c708ea191-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c51589577ea5662247827e6026390234d9cdec6f272f5a405b73e29557efc1f5",
            "width": 200,
            "height": 200
          },
          "REGULAR": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d1/8d13c2a6fa5172659f28d26c708ea191.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=15c325d0d622c264a1521b806ad70b2e645d8a305a1485a51a5ae12259b428c1",
            "width": 300,
            "height": 300
          },
          "LARGE": {
            "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8d1/8d13c2a6fa5172659f28d26c708ea191-l.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCOa8AHGbsbUGt%2BaGugdWtFfdPmi9lFFBXWUdxWhJjQfQIhAI2nSUJa5mRa8j1kHmolf0BmG3s35ulkX2WUnEkTXxIoKrkFCD8QABoMMTg3MDE3MTUwOTg2Igwb0Pm9U6U41b1sMo0qlgXMuZ6EAaFTSGlyziaCvMnQ1GkbkDQpHhVqqoiSgjYWggzAg%2BI9gSS6e3VtLjniaGGTypoi4yTXDNRDGN52nacHDjh2%2FWw4c1nUVoVhGMKeBqGXWQ%2B3VHqW27mm%2FEuOJRBj%2BRrO8ykc%2FomK2rRM76tWeBYo5E4hju%2F1Sks8Z8c1b2lxhsrlRHyfgWviSP4PuNOL1cZyETpFBTBtt9TM5sLwT%2BqDw0%2FU%2BCaQmSajBCfTWT%2BR%2F6ad2CB5MXpK9Q1Ybs7NRqMMg9QT6WHbqzD6g3PbDd3XqbB61e3WDAA00WVyq5pMBUnffcg3wIBEj9DmQDh8v8oQThq4Ib%2FCt1E12QiZaRhWrMb0p4AiixntjVu0ujZ52%2F4STzyA%2Bl7deV2cWc9oDSFG558Y4rADJODNpCpf%2BJmJMHHdPH1wOL4%2FHEBFSD%2F6j7hnXalbA5aw2KpaaskGuRKcWzWMDVKiIuEQw%2Buv2WkBSitDuvpuSOi8cG7NuxCX7qkKNX%2Fn%2Bl1kwf4FpklMI%2BW0qXuJU3GHemq03hpTcgc0%2Bq%2B%2BDuTTLrcLRXAOyGmQMvygGOiap%2B%2Fjyw4tSl3IpPz4sJsFdUv8K9nAuF9%2BHKvi6jafpXZ0FVOKDjQzJxXLmpUWFmWYGkrnO3loZPW%2BAXl8aXv6qlEsTqRsv2UlaklYzO6mMJhoXznHxu3MUIyzIAM31ngTVuEaKGn9QFfo1H2L%2BqSCLy5otBFM5AZo2Zfkx0ixaSVN74xDDt3iqvnM8p5w%2FTTRyyVJuG9MqOth0Mv45Y5jGVSAEJ7SrM5dZhtaLGEYPECl3dkYLLqeqLWEN6mZelxn1W3LI0iwp307SoIp4J8FSJ4btl1OyxuTSQfbudj2Nb37H8xX6L00Wb3KN5e4RjDv78e4BjqwATm3WNtl5quHetJ3ZW%2FAK1VedXPJt3VsXiyFv088BBc1%2B5ScyFTZhVwdtvsXQFCMeQ6AugsUA7CG47DJBeXJ81y0HasxABDCjF86r8Ig9viJKUrgDUx58i5O8yvMrVEUH8UvUgs%2B%2BrPr1k9juc0bZW2i7H5zIENh%2FbguprBSR3xQIM7cKoQ%2FUYyhbuRL4UnaPNBwBhmd1A6D%2BlC9dSRjX4csCfJCZxAN775y8K7gCVhF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241018T071538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOU2S5A3W%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ccbe6255b18196daa3fe60a077af6f2f98cea1b27e9952c6d79972e2eb8787b",
            "width": 600,
            "height": 600
          }
        },
        "source": "Food52",
        "url": "https://food52.com/recipes/33838-cabbage-with-pasta-krpice-sa-zeljem",
        "shareAs": "http://www.edamam.com/recipe/cabbage-with-pasta-krpice-sa-zeljem-e0cffc60dcdbd1c5ff4d2d1505374ad2/pasta",
        "yield": 8,
        "dietLabels": [
          "Balanced",
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Mediterranean",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher",
          "Immuno-Supportive"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 fresh cabbage, chopped (3 pounds)",
          "2 yellow onion, diced",
          "1/3 cup oil",
          "salt and black pepper",
          "homemade pasta cut into 1- inch squares or 1 package (350 g ) bow tie pasta"
        ],
        "ingredients": [
          {
            "text": "1 fresh cabbage, chopped (3 pounds)",
            "quantity": 3,
            "measure": "pound",
            "food": "cabbage",
            "weight": 1360.77711,
            "foodCategory": "vegetables",
            "foodId": "food_afb4o8kb767k0iapchxupaifxk1z",
            "image": "https://www.edamam.com/food-img/cb1/cb1411c925c19de26620e63cb90d0e14.jpg"
          },
          {
            "text": "2 yellow onion, diced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "yellow onion",
            "weight": 250,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/3 cup oil",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "oil",
            "weight": 72.66666666666666,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "salt and black pepper",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 12.20066266,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "salt and black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 6.10033133,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "homemade pasta cut into 1- inch squares or 1 package (350 g ) bow tie pasta",
            "quantity": 350,
            "measure": "gram",
            "food": "pasta",
            "weight": 350,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 2328.3405869716335,
        "totalCO2Emissions": 1683.180586802494,
        "co2EmissionsClass": "C",
        "totalWeight": 2051.180054033157,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2328.3405869716335,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 79.48915915602466,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 6.877692646073666,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2870333333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 46.85914713548869,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 22.68178032696673,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 351.8442699552,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 307.63534392871,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 44.20892602649,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 54.819936136512,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 62.81879206472,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4742.919032264088,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 596.2657700406576,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 351.68252859466486,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3078.222151971919,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 10.822262727663416,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.403748927263489,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1026.6801623814,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 56.0781738591,
            "unit": "µg"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 416.935537808,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.1006475875164,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.7239292715939999,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 8.856918527082,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 2.1646428572903,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 579.6443821661,
            "unit": "µg"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 579.6443821661,
            "unit": "µg"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 14.848042644498666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 890.5183595945333,
            "unit": "µg"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1261.895009644323,
            "unit": "g"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 116.41702934858168,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 122.29101408619178,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.38846323036833,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 117.2814233184,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 176.83570410596,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 125.63758412944,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 197.62162634433702,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 59.62657700406576,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.73393537968211,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 65.49408833982807,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 60.12368182035232,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 67.30680842966808,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 146.66859462591427,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 6.230908206566666,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 463.26170867555555,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 91.72063229303332,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 55.686867045692296,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 55.355740794262495,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 166.51098902233076,
            "unit": "%"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 144.911095541525,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 98.98695096332445,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 742.0986329954444,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 79.48915915602466,
            "hasRDI": true,
            "daily": 122.29101408619178,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 6.877692646073666,
                "hasRDI": true,
                "daily": 34.38846323036833,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.2870333333333333,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 46.85914713548869,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 22.68178032696673,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 351.8442699552,
            "hasRDI": true,
            "daily": 117.2814233184,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 307.63534392871,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 44.20892602649,
                "hasRDI": true,
                "daily": 176.83570410596,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 54.819936136512,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Sugars, added",
                "tag": "SUGAR.added",
                "schemaOrgTag": null,
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 62.81879206472,
            "hasRDI": true,
            "daily": 125.63758412944,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 4742.919032264088,
            "hasRDI": true,
            "daily": 197.62162634433702,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 596.2657700406576,
            "hasRDI": true,
            "daily": 59.62657700406576,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 351.68252859466486,
            "hasRDI": true,
            "daily": 83.73393537968211,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 3078.222151971919,
            "hasRDI": true,
            "daily": 65.49408833982807,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 10.822262727663416,
            "hasRDI": true,
            "daily": 60.12368182035232,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 7.403748927263489,
            "hasRDI": true,
            "daily": 67.30680842966808,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1026.6801623814,
            "hasRDI": true,
            "daily": 146.66859462591427,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 56.0781738591,
            "hasRDI": true,
            "daily": 6.230908206566666,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 416.935537808,
            "hasRDI": true,
            "daily": 463.26170867555555,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.1006475875164,
            "hasRDI": true,
            "daily": 91.72063229303332,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.7239292715939999,
            "hasRDI": true,
            "daily": 55.686867045692296,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 8.856918527082,
            "hasRDI": true,
            "daily": 55.355740794262495,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 2.1646428572903,
            "hasRDI": true,
            "daily": 166.51098902233076,
            "unit": "mg"
          },
          {
            "label": "Folate equivalent (total)",
            "tag": "FOLDFE",
            "schemaOrgTag": null,
            "total": 579.6443821661,
            "hasRDI": true,
            "daily": 144.911095541525,
            "unit": "µg"
          },
          {
            "label": "Folate (food)",
            "tag": "FOLFD",
            "schemaOrgTag": null,
            "total": 579.6443821661,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Folic acid",
            "tag": "FOLAC",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 14.848042644498666,
            "hasRDI": true,
            "daily": 98.98695096332445,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 890.5183595945333,
            "hasRDI": true,
            "daily": 742.0986329954444,
            "unit": "µg"
          },
          {
            "label": "Sugar alcohols",
            "tag": "Sugar.alcohol",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          },
          {
            "label": "Water",
            "tag": "WATER",
            "schemaOrgTag": null,
            "total": 1261.895009644323,
            "hasRDI": false,
            "daily": 0,
            "unit": "g"
          }
        ]
      },
      "_links": {
        "self": {
          "title": "Self",
          "href": "https://api.edamam.com/api/recipes/v2/e0cffc60dcdbd1c5ff4d2d1505374ad2?type=public&app_id=0ad01d6d&app_key=%20613d5b8342dd00062df156995b708937"
        }
      }
    }
  ]
}



const recetas = datos.hits; 

function recogerProductosHtml(receta) {
  const section = document.createElement("div");
  section.classList.add("carta");
  
  const imagen = document.createElement("img");
  const titulo = document.createElement("h4");
  const ingredientes = document.createElement("p");
  const link = document.createElement("a");

  titulo.innerText = receta.recipe.label;
  imagen.src = receta.recipe.image; 
  link.href = receta.recipe.url; 
  link.innerText = "Ir a la receta"; 
  ingredientes.innerText = receta.recipe.ingredients.map(ing => ing.text).join(", "); 

  section.appendChild(imagen);
  section.appendChild(titulo);
  section.appendChild(ingredientes);
  section.appendChild(link);

  return section; 
}

function crearRecetas() {
  const padre = document.getElementsByClassName("contenedor")[0];
  
  
  const recetasLimitadas = recetas.slice(0, 4);
  
  
  recetasLimitadas.forEach(receta => {
      const recetaHtml = recogerProductosHtml(receta);
      padre.appendChild(recetaHtml);
  });
}

crearRecetas();
  */