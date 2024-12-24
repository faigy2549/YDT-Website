using Entities;
using Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class OccasionService : IOccasionService
    {
        private readonly IOccasionRepository _repository;

        public OccasionService(IOccasionRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Occasion>> GetAllAsync() => await _repository.GetAllAsync();

        public async Task<Occasion> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

        public async Task AddAsync(Occasion occasion) => await _repository.AddAsync(occasion);

        public async Task UpdateAsync(Occasion occasion) => await _repository.UpdateAsync(occasion);

        public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
    }


}
