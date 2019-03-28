#include <iostream>
#include <string>

int main() {
    int n, q;
    std::string s;
    std::cin >> n >> q >> s;

    int counts[n]; // 累積和

    for (int i = 0; i < n; i++) {
        char current = s[i];
        char before;
        int count = 0;

        if (i == 0) {
            count = 0;
            before == '/0';
        } else {
            count = counts[i - 1];
            before = s[i - 1];
        }

        if (current == 'C' && before == 'A') {
            count++;
        }

        counts[i] = count;
    }

    for (int i = 0; i < q; i++) {
        int l, r;
        std::cin >> l >> r;
        std::cout << counts[r - 1] - counts[l - 1] << std::endl;
    }
}