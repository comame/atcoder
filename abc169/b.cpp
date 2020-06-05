#include <iostream>

long max = 1000000000000000000;

int main() {
    int n;
    std::cin >> n;

    long answer = 1;
    bool isOverflow = false;

    for (int i = 0; i < n; i += 1) {
        long a;
        std::cin >> a;

        if (a == 0) {
            std::cout << 0 << std::endl;
            return 0;
        } else if (isOverflow) {
            continue;
        }

        if (max / answer < a) {
            // Will be overflow
            isOverflow = true;
            continue;
        }

        answer = answer * a;
    }

    if (isOverflow) {
        std::cout << -1 << std::endl;
    } else {
        std::cout << answer << std::endl;
    }
}
