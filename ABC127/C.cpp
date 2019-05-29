#include <iostream>

int main() {
    int n, m;
    std::cin >> n >> m;

    int l = 1;
    int r = n;

    for (int i = 0; i < m; i++) {
        int lTmp, rTmp;
        std::cin >> lTmp >> rTmp;

        if (lTmp > l) {
            l = lTmp;
        }
        if (rTmp < r) {
            r = rTmp;
        }
    }

    if (r - l + 1 <= 0) {
        std::cout << 0 << std::endl;
    } else {
        std::cout << r - l + 1 << std::endl;
    }
}